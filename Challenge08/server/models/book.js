'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookModel = new Schema({
    isbn:{ type: String, required:true , unique: true},
    title: { type: String , default:""},
    authors: { type: Array , default:[]},
    location: { type: String , default:""},
    rating: { type: Number , default:0},
    pageCount: { type: Number , default:0},
    description: { type: String , default:""},
    available: { type: Boolean , default:true},
    thumbnail: { type:String , default:""},
    publishedDate: { type:String , default:""},
    bookType: { type:String , default:""}
});

module.exports = mongoose.model('Book', bookModel);


