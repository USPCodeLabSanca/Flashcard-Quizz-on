const express = require('express')
const cardModel = require('./models/card.model.js')
const app = express()
const dbURL = "mongodb+srv://admin:admin@cluster0.grbxctk.mongodb.net/Cluster0?retryWrites=true&w=majority"
const mongoose = require('mongoose');

// Tipos de dados
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }))

//Chama a funcao connectBanco para conectar ao banco de dados
connectBanco().catch(err => console.log(err));

//Chama o mongoose para conectar no banco
async function connectBanco() {
  await mongoose.connect(dbURL);
}


/* Endpoints */
app.get('/cards', async function (req, res) {
    const element = await cardModel.find({});
    res.json(element)
})
app.post('/cards', async function (req, res) {
    //Imprime o body da requisicao
    console.log(req.body)
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
    res.json(elemento)
})
app.get('/cards/:id', async function (req, res) {
    const element = await cardModel.findById(req.params.id)
    res.json(element)
})

app.listen(3000)