const http = require('node:http');

const port = '1245';
const host = 'localhost';

const handler = (req, res) => {
  res.end('Hello Holberton School!');
};

const app = http.createServer(handler);

app.listen(port, host);

module.exports = app;
