'use strict'

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Routes import
const bookRoutes = require('./Routes/book');
const userRoutes = require('./Routes/user');
const reservationRoutes = require('./Routes/reservation');

//connect mongo
mongoose.connect(
    'mongodb://'+process.env.MONGO_LOCAL)
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });

mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//CORS error handling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'X-API-KEY, Access-Control-Request-MethodOrigin, X-Requested-With, Content-Type, Accept, Authorization'
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