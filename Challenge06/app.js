'use strict'

const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

//Routes import
const bookRoutes = require('./Routes/book');
const userRoutes = require('./Routes/user');
const reservationRoutes = require('./Routes/reservation');

mongoose.connect(
    'mongodb://admin:'+
    process.env.MONGO_ATLAS_PW +
    '@papt-shard-00-00-cvkle.mongodb.net:27017,papt-shard-00-01-cvkle.mongodb.net:27017,papt-shard-00-02-cvkle.mongodb.net:27017/test?ssl=true&replicaSet=papt-shard-0&authSource=admin'
);

mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS error handling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type. Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


//Endpoints routes
app.use('/book', bookRoutes);
app.use('/user', userRoutes);
app.use('/reservation', reservationRoutes);

// error no route found
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;