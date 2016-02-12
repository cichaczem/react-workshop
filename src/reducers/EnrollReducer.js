import ActionTypes from '../constants/ActionTypes';

const initialState = {
  isBasicInfoOpen: true
};

let EnrollReducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionTypes.TOGGLE_BASIC_INFO:
    return Object.assign({}, state, {
      isBasicInfoOpen: !state.isBasicInfoOpen
    })
  default:
    return state;
  }
};

export default EnrollReducer;
