import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../AppDispatcher';
import API from '../lib/API';

const PaticipantsActionCreator = {
  requestStudents() {
    const students = new API().getStudents();
    return {
      type: ActionTypes.REQUEST_STUDENTS,
      students: students
    };
  }
}

export default PaticipantsActionCreator;
