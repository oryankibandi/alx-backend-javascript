const { resolve } = require('path');
const { readFile } = require('fs/promises');

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

  return fields;
};

const countStudents = async (path) => {
  try {
    const filePath = resolve(path);

    const content = await readFile(filePath, { encoding: 'utf-8' });

    logStudents(content.split('\n'));
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Cannot load the database');
  }
};

const readDatabase = async (path) => {
  const students = await countStudents(path);
  return students;
};

module.exports = readDatabase;
