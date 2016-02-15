import ActionTypes from '../constants/ActionTypes';

const initialState = {
  all: []
};

let ParticipantsReducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionTypes.RECEIVE_STUDENTS:
  case ActionTypes.STUDENT_CREATION_SUCCESSFUL:
    return Object.assign({}, state, {
      all: action.students
    });
  default:
    return state;
  }
};

export default ParticipantsReducer;
