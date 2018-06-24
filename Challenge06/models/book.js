'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookModel = new Schema({
    isbn:{ type: String, required:true , unique: true},
    title: { type: String, required:true },
    author: { type: Array, required:true },
    location: { type: String, required:true },
    rating: { type: Number, required:true },
    pages: { type: Number, required:true },
    summary: { type: String, required:true },
    available: { type: Boolean, required:true },
    book_type: { type:String, required:true }
});

module.exports = mongoose.model('Book', bookModel);


