import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../AppDispatcher';

const EnrollActionCreator = {
  toggleBasicInfo() {
    AppDispatcher.dispatch({
      actionType: ActionTypes.TOGGLE_BASIC_INFO
    })
  },

  togglePreferences() {
    AppDispatcher.dispatch({
      actionType: ActionTypes.TOGGLE_PREFERENCES
    })
  }
}

export default EnrollActionCreator;
