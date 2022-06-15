const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const cardModel = require('./models/card.model.js')
const deckModel = require('./models/deck.model.js')
const userModel = require('./models/user.model.js')

require('dotenv').config()
const port = process.env.PORT

const app = express()

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
    const per = req.body.pergunta
    const resp = req.body.resposta
    const respCerta = req.body.respostaCerta

    const elemento = await cardModel.create({
        pergunta: per, 
        resposta: resp,
        respostaCerta: respCerta
    });

    return res.json(elemento)
})

app.post('/decks', async function (req, res) {
    const cards = req.body.cards
    const score = req.body.score

    const elemento = await deckModel.create({
        cards,
        score
    });

    return res.json(elemento)
})

app.post('/users', async function (req, res) {

    const username = req.body.username
    const password = req.body.password
    const decks = req.body.decks

    const elemento = await userModel.create({
        username,
        password,
        decks
    });

    return res.json(elemento)
})

app.put('/deckAddCard/:idDeck/:idCard', async (req, res) => {
    const idDeck = req.params.idDeck
    const idCard = req.params.idCard
  
    const modify = await deckModel.findOneAndUpdate(
        {_id : idDeck},
        {$push: { cards: idCard }},
        {new: true})
  
    return res.json(modify)
})

app.put('/userAddDeck/:idUser/:idDeck', async (req, res) => {
    const idUser = req.params.idUser
    const idDeck = req.params.idDeck

    const modify = await userModel.findOneAndUpdate(
        {_id : idUser},
        {$push: { decks: idDeck }},
        {new: true})

    return res.json(modify)
})

app.put('/deckRemoveCard/:idDeck/:idCard', async (req, res) => {
    const idDeck = req.params.idDeck
    const idCard = req.params.idCard
  
    const modify = await deckModel.findOneAndUpdate(
        {_id : idDeck},
        {$pull: { cards: idCard }},
        {new: true})
  
    return res.json(modify)
})

app.put('/userRemoveDeck/:idUser/:idDeck', async (req, res) => {
    const idUser = req.params.idUser
    const idDeck = req.params.idDeck

    const modify = await userModel.findOneAndUpdate(
        {_id : idUser},
        {$pull: { decks: idDeck }},
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

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL);

    app.listen(port, () => {
        console.log(`Servidor aberto em: http://localhost:${port}`);
    })
}