const updateStudentGradeByCity = (studentList, city, newGrades) => {
  const studentsInCity = studentList.filter(
    (student) => student.location === city,
  );
  const studInCity = studentsInCity.map((stud) => {
    const newArr = stud;
    const graded = newGrades.filter((grade) => grade.studentId === stud.id);
    if (graded.length !== 0) {
      newArr.grade = graded[0].grade;
    } else {
      newArr.grade = 'N/A';
    }
    return newArr;
  });

  return studInCity;
};

module.exports = updateStudentGradeByCity;
