const getListStudentsIds = (studentList) => {
  if (!(studentList instanceof Array)) {
    return [];
  }

  const idArr = studentList.map((student) => student.id);

  return idArr;
};

module.exports = getListStudentsIds;
