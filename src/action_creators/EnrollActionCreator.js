import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../AppDispatcher';

const EnrollActionCreator = {
  toggleBasicInfo() {
    return {
      type: ActionTypes.TOGGLE_BASIC_INFO
    }
  },

  togglePreferences() {
    AppDispatcher.dispatch({
      actionType: ActionTypes.TOGGLE_PREFERENCES
    })
  }
}

export default EnrollActionCreator;
