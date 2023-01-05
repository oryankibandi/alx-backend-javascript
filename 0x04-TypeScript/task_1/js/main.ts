interface Teacher {
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number
}

interface printTeacherFunction {
  (firstName: string, lastName: string): void
}

interface StudentClassInterface {
  firstName: string,
  lastName: string,
  workOnHomework(): 'Currently working',
  displayName(): string
}


const printTeacher: printTeacherFunction = (firstName, lastName) => {
  console.log(`${firstName[0]}. ${lastName}`);
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName,
    this.lastName = lastName
  }


  workOnHomework(): 'Currently working'{
    return 'Currently working';
  }

  displayName():string {
    return this.firstName;
  }

}