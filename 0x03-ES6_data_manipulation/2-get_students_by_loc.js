const getStudentsByLocation = (studentsList, city) => {
  const studs = studentsList.filter((student) => student.location === city);

  return studs;
};

module.exports = getStudentsByLocation;
