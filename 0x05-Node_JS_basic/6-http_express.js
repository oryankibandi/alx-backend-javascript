const express = require('express');
const http = require('http');

const app = express();
const port = '1245';

app.set('port', port);

const server = http.createServer(app);

server.on('listening', () => console.log(`listening on port ${port}`));

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

server.listen(port);

module.exports = app;
