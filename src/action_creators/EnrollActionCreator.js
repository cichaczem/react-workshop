import ActionTypes from '../constants/ActionTypes';

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
  },

  onChanged(type, value) {
    return {
      type: ActionTypes.INPUT_CHANGED,
      inputType: type,
      inputValue: value
    }
  }
}

export default EnrollActionCreator;
