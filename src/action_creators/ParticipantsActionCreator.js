import ActionTypes from '../constants/ActionTypes';
import API from '../lib/API';

const PaticipantsActionCreator = {
  requestStudents() {
    return (dispatch) => {
      return new API().getStudents().then((students) => {
        dispatch(this._receiveStudents(students));
      });
    };
  },

  _receiveStudents(students) {
    return {
      type: ActionTypes.RECEIVE_STUDENTS,
      students: students
    };
  }
};

export default PaticipantsActionCreator;
