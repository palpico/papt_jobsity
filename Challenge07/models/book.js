'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookModel = new Schema({
    isbn:{ type: String, required:true , unique: true},
    title: { type: String },
    author: { type: Array },
    location: { type: String },
    rating: { type: Number },
    pages: { type: Number },
    summary: { type: String },
    available: { type: Boolean },
    book_type: { type:String }
});

module.exports = mongoose.model('Book', bookModel);


