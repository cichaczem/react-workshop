import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../AppDispatcher';

const PaticipantsActionCreator = {
  requestStudents() {
    AppDispatcher.dispatch({
      actionType: ActionTypes.REQUEST_STUDENTS
    })
  }
}

export default PaticipantsActionCreator;
