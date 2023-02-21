const { stdout } = require('process');

const displayMessage = (message) => {
  stdout.write(`${message}\n`);
};

module.exports = displayMessage;
