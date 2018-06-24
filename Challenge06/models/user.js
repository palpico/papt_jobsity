'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    name: { type:String, required:true },
    surname: { type: String, required:true },
    nick: { type: String, required:true },
    email: {
        type: String,
        required:true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required:true },
    role: { type: String, default:"user" },
    image: { type: String }
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('User', userModel);