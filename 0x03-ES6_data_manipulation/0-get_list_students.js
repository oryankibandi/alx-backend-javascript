const getListStudents = () => {
  const obj1 = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  const obj2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const obj3 = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };

  const students = [];
  students.push(obj1, obj2, obj3);

  return students;
};

module.exports = getListStudents;
