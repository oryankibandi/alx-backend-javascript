const { resolve } = require('node:path');
const { readFileSync } = require('node:fs');

const logStudents = (students) => {
  const fields = {};
  students.shift();

  process.stdout.write(`Number of students: ${students.length}\n`);

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
    process.stdout.write(
      // eslint-disable-next-line comma-dangle
      `Number of students in ${key}: ${fields[key].count}. `
    );
    process.stdout.write('List:');

    for (let i = 0; i < fields[key].students.length; i += 1) {
      process.stdout.write(` ${fields[key].students[i]}`);
      if (i !== fields[key].students.length - 1) {
        process.stdout.write(',');
      }
    }
    process.stdout.write('\n');
  });
};

const countStudents = (path) => {
  try {
    const filePath = resolve(path);
    const content = readFileSync(filePath, { encoding: 'utf-8' });
    logStudents(content.split('\n'));
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
