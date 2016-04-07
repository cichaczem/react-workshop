import ActionTypes from '../constants/ActionTypes';

const initialState = {
  isBasicInfoOpen: true,
  isPreferencesOpen: false,
  enrolling: false,
  enrolled: false,
  errors: []
};

let EnrollReducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionTypes.TOGGLE_BASIC_INFO:
    return Object.assign({}, state, {
      isBasicInfoOpen: !state.isBasicInfoOpen
    })
  case ActionTypes.TOGGLE_PREFERENCES:
    return Object.assign({}, state, {
      isPreferencesOpen: !state.isPreferencesOpen
    })
  case ActionTypes.ENROLL_STUDENT_INPROGRESS:
    return Object.assign({}, state, {
      enrolling: true,
      errors: [],
    })
  case ActionTypes.ENROLL_STUDENT_SUCCESS:
    return Object.assign({}, state, {
      enrolled: true,
      enrolling: false,
    })
  case ActionTypes.ENROLL_STUDENT_FAILURE:
    return Object.assign({}, state, {
      enrolling: false,
      errors: action.errors
    })
  default:
    return state;
  }
};

export default EnrollReducer;
