import ActionTypes from '../constants/ActionTypes';
import API from '../lib/API';

const PaticipantsActionCreator = {
  requestStudents() {
    return (dispatch) => {
      new API().getStudents().then((students) => {
        dispatch(this._receiveStudents(students));
      });
    };
  },

  _receiveStudents(students) {
    return {
      type: ActionTypes.RECEIVE_STUDENTS,
      students: students
    };
  },

  addStudent(student, callback) {
    return (dispatch) => {
      const { name, surname, house, pet } = student;
      new API().addStudent(name, surname, house, pet)
      .then((students) => {
        dispatch(this._addStudentSuccessful(students));
        callback();
      }, (errors) => {
        dispatch(this._addStudentFailed(errors));
      });
    };
  },

  _addStudentSuccessful(students) {
    return {
      type: ActionTypes.STUDENT_CREATION_SUCCESSFUL,
      students: students
    };
  },

  _addStudentFailed(errors) {
    return {
      type: ActionTypes.STUDENT_CREATION_FAILED,
      errors: errors
    };
  }
}

export default PaticipantsActionCreator;
