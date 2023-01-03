const getStudentIdsSum = (studentList) => {
  const students = studentList.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, 0,
  );

  return students;
};

module.exports = getStudentIdsSum;
