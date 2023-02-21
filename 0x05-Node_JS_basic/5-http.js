const http = require('http');
const { resolve } = require('path');
const { readFile } = require('fs/promises');

const port = '1245';
const host = 'localhost';

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
      `Number of students in ${key}: ${fields[key].count}. `
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

// eslint-disable-next-line consistent-return
const handler = async (req, res) => {
  if (req.url === '/') res.end('Hello Holberton School!');
  if (req.url === '/students') {
    const db = `${process.argv[2]}`;

    const content = await countStudents(db);

    res.end(content);
  }
};

const app = http.createServer(handler);

app.listen(port, host);

module.exports = app;
