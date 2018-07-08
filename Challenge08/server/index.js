'use strict'

const app = require('./app');
const http = require('http');

//port used for listening
const port = process.env.PORT || 9000;

const server = http.createServer(app);

server.listen(port);