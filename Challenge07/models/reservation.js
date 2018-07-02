'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationModel = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', required: true
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book', required: true
    },
    lend_date: {type: Date, default: Date()},
    return_date: {type: Date, default: ""}
});

module.exports = mongoose.model('Reservation', reservationModel);