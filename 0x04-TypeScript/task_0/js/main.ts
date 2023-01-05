interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

interface Row {
  firstName: string,
  location: string
}

const student1: Student = {
  firstName: 'Mark',
  lastName: 'John',
  age: 25,
  location: 'San Jose'
}

const student2: Student = {
  firstName: 'Mark',
  lastName: 'John',
  age: 25,
  location: 'San Jose'
}

const studentsList: Array<Student> = [student1, student2];
const studentLocation: Array<Row> = [];

studentsList.forEach((student) => {
  let row: Row = {
    firstName: student.firstName,
    location: student.location
  };

  studentLocation.push(row);
});

console.table(studentLocation);