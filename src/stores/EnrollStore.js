import BaseStore from './BaseStore';
import AppDispatcher from '../AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import { EventEmitter } from 'events';

class EnrollStore extends BaseStore {
  constructor() {
    super();

    this._isBasicInfoOpen = true;
    this._isPreferencesOpen = false;
  }

  isBasicInfoOpen() {
    return this._isBasicInfoOpen;
  }

  isPreferencesOpen() {
    return this._isPreferencesOpen;
  }
}

const enrollStore = new EnrollStore();

enrollStore.dispatchToken = AppDispatcher.register((payload) => {
  switch (payload.actionType) {
  case ActionTypes.TOGGLE_BASIC_INFO:
    enrollStore._isBasicInfoOpen = !enrollStore._isBasicInfoOpen;
    enrollStore.emitChange();
    break;
  case ActionTypes.TOGGLE_PREFERENCES:
    enrollStore._isPreferencesOpen = !enrollStore._isPreferencesOpen;
    enrollStore.emitChange();
    break;

  default:
    // Do nothing
  }
});

export default enrollStore;
