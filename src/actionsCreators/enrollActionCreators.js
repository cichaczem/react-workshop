import dispatcher from '../appDispatcher';
import actionTypes from  '../constants/actionTypes';

const _toggleBasicInfo = () => {
  return dispatcher.dispatch(
    {
      actionType: actionTypes.TOGGLE_BASIC_INFO
    }
  );
}

const _togglePreferences = () => {
  return dispatcher.dispatch(
    {
      actionType: actionTypes.TOGGLE_PREFERENCES
    }
  );
}

export const toggleBasicInfo = _toggleBasicInfo;
export const togglePreferences = _togglePreferences;
