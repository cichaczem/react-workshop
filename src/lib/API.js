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

class API {
  getStudents() {
    return students;
  }

  addStudent(name, surname, house, pet) {
    const student = this.buildStudent(name, surname, house, pet);
    students = [...students, student];
    return true;
  }

  editStudent(id, name, surname, house, pet) {
    const student = this.buildStudent(name, surname, house, pet, id);
    students = [...students.filter(student => student.id !== id), student];
    return true;
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
