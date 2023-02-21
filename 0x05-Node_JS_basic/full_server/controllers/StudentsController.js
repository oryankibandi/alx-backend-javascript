const readDatabase = require('../utils');

const format = (fields) => {
  let content = 'This is the list of our students';
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

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase('database.csv');

      const content = format(students);

      response.status(200).send(content);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const majors = ['CS', 'SWE'];
    const { major } = request.params;

    if (!majors.includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase('database.csv');

      return response.status(200).send(students);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
