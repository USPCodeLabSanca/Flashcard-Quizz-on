const mongoose = require("mongoose");
const { Schema } = mongoose;

const cardSchema = new Schema({
    pergunta: String,
    resposta: [String],
    respostaCerta: Number,
});

const card = mongoose.model('Card', cardSchema);

module.exports = card;