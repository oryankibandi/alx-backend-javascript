const { stdin, stdout } = require('process');

stdout.write('Welcome to Holberton School, what is your name?\n');

process.on('exit', () => {
  stdout.write('This important software is now closing\n');
});

stdin.on('readable', () => {
  let chunk;

  // eslint-disable-next-line no-cond-assign
  while ((chunk = stdin.read()) !== null) {
    stdout.write(`Your name is: ${chunk}`);
  }
});
