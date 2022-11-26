const mongoose = require('mongoose')
const Schema = mongoose.Schema


const BOOK_SCHEMA =new Schema({
    title: String,
    author: String,
    genre: String,
    year: Number,
    description: String
    
});
const BOOK = mongoose.model('book', BOOK_SCHEMA);

module.exports = BOOK;