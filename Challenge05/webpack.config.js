//set required packages
var webpack = require('webpack');
var path = require('path');

//set build and app directories, they are the same for this project
var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'js');

var config;

config = {
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: '/app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {colors: true},
    devtool: 'source-map'
};

module.exports = config;
