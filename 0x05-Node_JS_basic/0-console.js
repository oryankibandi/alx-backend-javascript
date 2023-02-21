const { stdout } = require('node:process');

const displayMessage = (message) => {
  stdout.write(`${message}\n`);
};

module.exports = displayMessage;
