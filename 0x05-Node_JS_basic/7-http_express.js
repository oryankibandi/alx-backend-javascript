const express = require('express');
const http = require('http');
const { resolve } = require('node:path');
const { readFile } = require('node:fs/promises');

const app = express();
const port = '1245';

const logStudents = (students) => {
  const fields = {};
  students.shift();

  let content = `Number of students: ${students.length}\n`;

  students.forEach((student) => {
    const field = student.split(',')[3];
    if (Object.keys(fields).includes(field)) {
      fields[field].count += 1;
      fields[field].students.push(student.split(',')[0]);
    } else {
      fields[field] = {
        count: 1,
        students: [],
      };
      fields[field].students.push(student.split(',')[0]);
    }
  });

  const keys = Object.keys(fields);

  // eslint-disable-next-line array-callback-return
  keys.map((key) => {
    content = content.concat(
      `Number of students in ${key}: ${fields[key].count}. `,
    );
    content = content.concat('List:');

    for (let i = 0; i < fields[key].students.length; i += 1) {
      content = content.concat(` ${fields[key].students[i]}`);
      if (i !== fields[key].students.length - 1) {
        content = content.concat(',');
      }
    }
    content = content.concat('\n');
  });

  return content;
};

const countStudents = async (path = 'database.csv') => {
  try {
    const filePath = resolve(path);

    const content = await readFile(filePath, { encoding: 'utf-8' });

    return logStudents(content.split('\n'));
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

app.set('port', port);

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const content = await countStudents(process.argv[2]);

  res.send(content);
});

server.listen(port);

module.exports = app;
