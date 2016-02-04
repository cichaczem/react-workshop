import AppDispatcher from '../AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

class EnrollStore extends EventEmitter {
  addChangeListener(listener, context) {
    this.on(CHANGE_EVENT, listener, context);
  }

  removeChangeListener(listener, context) {
    this.removeListener(CHANGE_EVENT, listener, context);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  constructor() {
    super();

    this._isBasicInfoOpen = true;
  }

  isBasicInfoOpen() {
    return this._isBasicInfoOpen;
  }
}

const enrollStore = new EnrollStore();

enrollStore.dispatchToken = AppDispatcher.register((payload) => {
  switch (payload.actionType) {
  case ActionTypes.TOGGLE_BASIC_INFO:
    enrollStore._isBasicInfoOpen = !enrollStore._isBasicInfoOpen;
    enrollStore.emitChange();
    break;

  default:
    // Do nothing
  }
});

export default enrollStore;
