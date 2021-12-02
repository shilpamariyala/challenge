'use strict';
const express = require('express');
const app = express();
const registerRoutes = require('./routes');
const path = require('path');
const publicPath = path.join(__dirname, '../public');

// server config
const port = process.env.PORT || 3000;

app.use('/', express.static(publicPath));

app.get('/', function(req, res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// register routes
registerRoutes(app);

// create server start method
const start = () => {
    return new Promise((resolve, reject) => {
        // start the server
        app.listen(port, () => {
            console.log(`Connected to Port ${port}`);
            resolve()
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`)
    });
}

module.exports = start;


