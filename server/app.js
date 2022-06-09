const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const cardModel = require('./models/card.model.js')
const deckModel = require('./models/deck.model.js')
const userModel = require('./models/user.model.js')

require('dotenv').config()
const port = process.env.PORT

const app = express()
// Tipos de dados
app.use(express.json()); 
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

/* Endpoints */
app.get('/cards', async function (req, res) {
    const element = await cardModel.find({});
    return res.json(element)
})

app.get('/cards/:id', async function (req, res) {
    const element = await cardModel.findById(req.params.id)
    return res.json(element)
})

app.get('/decks', async function (req, res) {
    const element = await deckModel.find({});
    return res.json(element)
})

app.get('/decks/:id', async function (req, res) {
    const element = await deckModel.findById(req.params.id)
    return res.json(element)
})

app.get('/users', async function (req, res) {
    const element = await userModel.find({});
    return res.json(element)
})

app.get('/users/:id', async function (req, res) {
    const element = await userModel.findById(req.params.id)
    return res.json(element)
})

app.post('/cards', async function (req, res) {
    //Variaveis para guardar os parametros passados pelo frontend
    const per = req.body.pergunta
    const resp = req.body.resposta
    const respCerta = req.body.respostaCerta

    //TO DO: validar os campos --------------------

    //Cria model com as variaveis e coloca no banco de dados
    const elemento = await cardModel.create({
        pergunta: per, 
        resposta: resp,
        respostaCerta: respCerta
    });
    //Retorno de resposta
    return res.json(elemento)
})

app.post('/decks', async function (req, res) {
    //Variaveis para guardar os parametros passados pelo frontend
    const cards = req.body.cards
    const score = req.body.score

    //TO DO: validar os campos --------------------

    // try {
    //     if(JSON.stringify(cards) == "[]") throw "Deck Vazio";
    // }
    // catch(err) {
    //     console.log("Erro: "+err)
    //     return;
    // }

    //Cria model com as variaveis e coloca no banco de dados
    const elemento = await deckModel.create({
        cards,
        score
    });
    //Retorno de resposta
    return res.json(elemento)
})

app.post('/users', async function (req, res) {
    //Variaveis para guardar os parametros passados pelo frontend
    const username = req.body.username
    const password = req.body.password
    const decks = req.body.decks

    const elemento = await userModel.create({
        username,
        password,
        decks
    });
    //Retorno de resposta
    return res.json(elemento)
})

app.put('/addCard/:idDeck/:idCard', async (req, res) => {
    const idDeck = req.params.idDeck
    const idCard = req.params.idCard
  
    const modify = await deckModel.findOneAndUpdate(
        {_id : idDeck},
        {$push: { cards: idCard }},
        {new: true})
  
    return res.json(modify)
})

app.put('/addDeck/:idUser/:idDeck', async (req, res) => {
    const idUser = req.params.idUser
    const idDeck = req.params.idDeck

    const modify = await userModel.findOneAndUpdate(
        {_id : idUser},
        {$push: { decks: idDeck }},
        {new: true})

    return res.json(modify)
})

app.delete('/cards', async (req, res) => {
    const deleteMany = await cardModel.deleteMany({});
  
    return res.json(deleteMany)
})

app.delete('/cards/:id', async (req, res) => {
    const id = req.params.id

    const deleteOne = await cardModel.deleteOne({ _id: id });
  
    return res.json(deleteOne)
})

app.delete('/decks', async (req, res) => {
    const deleteMany = await deckModel.deleteMany({});
  
    return res.json(deleteMany)
})

app.delete('/decks/:id', async (req, res) => {
    const id = req.params.id

    const deleteOne = await deckModel.deleteOne({ _id: id });
  
    return res.json(deleteOne)
})

//Chama a funcao main para conectar ao banco de dados
main().catch(err => console.log(err));
//Chama o mongoose para conectar no banco
async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.listen(port, () => {
    console.log(`Servidor aberto em: http://localhost:${port}`)
  })
}