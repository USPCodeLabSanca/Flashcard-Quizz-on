const deckModel = require('./deck.model.js')

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    password: String,
    decks: [{type: Schema.Types.ObjectId, ref: 'deckModel'}]
});

const user = mongoose.model('User', userSchema);

module.exports = user;