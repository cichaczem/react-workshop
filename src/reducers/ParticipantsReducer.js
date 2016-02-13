import ActionTypes from '../constants/ActionTypes';

const initialState = {
  all: []
};

let ParticipantsReducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionTypes.REQUEST_STUDENTS:
    return Object.assign({}, state, {
      all: action.students
    });
  default:
    return state;
  }
};

export default ParticipantsReducer;
