const cardModel = require('./card.model.js')

const mongoose = require("mongoose");
const { Schema } = mongoose;

const deckSchema = new Schema({
    cards: [{type: Schema.Types.ObjectId, ref: 'cardModel'}],
    score: Number
});

const deck = mongoose.model('Deck', deckSchema);

module.exports = deck;