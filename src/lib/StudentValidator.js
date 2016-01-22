class StudentValidator {
  constructor(student) {
    this.student = student
  }

  isValid() {
    return Object.keys(this.errors()).length === 0
  }

  errors() {
    let studentErrors = {};
    this.validate().forEach(
      (errors) => {
        const key = Object.keys(errors)[0];
        if(errors[key].length > 0 && key !== "id")
          studentErrors[key] = errors[key];
        return true;
      }
    );
    return studentErrors;
  }

  validate() {
    return Object.keys(this.student).map(
      (key) => {
        let val = this.student[key];
        let errors = {};
        let errorForKey = [];
        if(!this.isFilled(val))
          errorForKey.push("Can't be blank");
        if(!this.isLongEnough(val))
          errorForKey.push("Is too short");
        errors[key] = errorForKey
        return errors;
      }
    );
  }

  isFilled(value) {
    return value !== ""
  }

  isLongEnough(value) {
    return value.length > 2
  }
}

export default StudentValidator;
