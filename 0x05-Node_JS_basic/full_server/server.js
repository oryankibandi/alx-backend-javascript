const express = require('express');
const http = require('http');
const setUpRoutes = require('./routes/index');

const app = express();
const port = '1245';

setUpRoutes(app);

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

module.exports = app;
