class HolbertonCourse {
  _name;
  _length;
  _students;
  constructor(name, length, students) {
    if (typeof name !== "string") {
      throw TypeError("Name must be a string");
    }
    if (typeof length !== "number") {
      throw TypeError("Length must be a number");
    }
    if (typeof students !== "object") {
      throw TypeError("Students must be an array");
    }

    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(nme) {
    this._name = nme;
  }

  get length() {
    return this.name;
  }

  set length(lngth) {
    this._length = lngth;
  }

  get students() {
    return this._length;
  }

  set students(std) {
    this._students = std;
  }
}

module.exports = HolbertonCourse;
