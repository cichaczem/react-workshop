var students = [
  {
    id: 1,
    name: "Harry",
    surname: "Potter",
    house: "Gryffindor",
    pet: "Owl"
  },
  {
    id: 2,
    name: "Draco",
    surname: "Malfoy",
    house: "Slytherin",
    pet: "Unicorn"
  },
  {
    id: 3,
    name: "Hermiona",
    surname: "Granger",
    house: "Gryffindor",
    pet: "Cat"
  },
];

import Validator from './StudentValidator';

const REQUEST_TIME = 2000;

class API {
  getStudents() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(students);
      }, REQUEST_TIME);
    });
  }

  addStudent(name, surname, house, pet) {
    const student = this.buildStudent(name, surname, house, pet);
    const validator = new Validator(student);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(validator.isValid()) {
          students = [...students, student];
          resolve(students);
        } else {
          reject(validator.errors());
        }
      }, REQUEST_TIME);
    });
  }

  editStudent(id, name, surname, house, pet) {
    const student = this.buildStudent(name, surname, house, pet, id);
    const validator = new Validator(student);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(validator.isValid()) {
          students = [...students.filter(student => student.id !== id), student];
          resolve(students);
        } else {
          reject(validator.errors());
        }
      }, REQUEST_TIME);
    });
  }

  buildStudent(name, surname, house, pet, id = this.nextId()) {
    return {
      id: id,
      name: name,
      surname: surname,
      house: house,
      pet: pet
    }
  }

  nextId() {
    return students.sort((a, b) => b.id > a.id)[0].id + 1;
  }
}

export default API;
