import ActionTypes from '../constants/ActionTypes';

const initialState = {
  isBasicInfoOpen: true,
  isPreferencesOpen: false,
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
  default:
    return state;
  }
};

export default EnrollReducer;
