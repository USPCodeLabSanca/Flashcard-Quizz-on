const express = require('express')
const cardModel = require('./models/card.model.js')
const app = express()
const dbURL = "mongodb+srv://admin:admin@cluster0.grbxctk.mongodb.net/Cluster0?retryWrites=true&w=majority"
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

connectBanco().catch(err => console.log(err));

async function connectBanco() {
  await mongoose.connect(dbURL);
}

app.get('/cards', function (req, res) {
    
})
app.post('/cards', async function (req, res) {
    console.log(req.body)
    const per = req.body.pergunta
    const resp = req.body.resposta
    const respCerta = req.body.respostaCerta
    const elemento = await cardModel.create({
        pergunta: per, 
        resposta: resp,
        respostaCerta: respCerta
    });
    res.json(elemento)
})
app.get('/cards/:id', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)