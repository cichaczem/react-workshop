import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../AppDispatcher';

const EnrollActionCreator = {
  toggleBasicInfo() {
    return {
      type: ActionTypes.TOGGLE_BASIC_INFO
    }
  },

  togglePreferences() {
    return {
      type: ActionTypes.TOGGLE_PREFERENCES
    }
  }
}

export default EnrollActionCreator;
