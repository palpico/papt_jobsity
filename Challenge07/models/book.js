'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookModel = new Schema({
    isbn:{ type: String, required:true , unique: true},
    title: { type: String },
    authors: { type: Array },
    location: { type: String },
    rating: { type: Number },
    pageCount: { type: Number },
    description: { type: String },
    available: { type: Boolean },
    thumbnail: { type:String },
    publishedDate: { type:String },
    bookType: { type:String }
});

module.exports = mongoose.model('Book', bookModel);


