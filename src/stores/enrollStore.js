import dispatcher from '../appDispatcher';
import actionTypes from  '../constants/actionTypes';
import { EventEmitter } from 'Events';

const eventName = 'change';

class EnrollStore extends EventEmitter {
  constructor() {
    super();
    this.basicInfoOpen = true;
    this.preferencesOpen = false;
  }

  subscribe(callback) {
    this.on(eventName, callback);
  }

  unsubscribe(callback) {
    this.removeListener(eventName, callback);
  }

  notify() {
    this.emit(eventName);
  }

  getBasicInfoOpen() {
    return this.basicInfoOpen;
  }

  getPreferencesOpen() {
    return this.preferencesOpen;
  }
}

const enrollStore = new EnrollStore();

dispatcher.register(
  (payload) => {
    switch (payload.actionType) {
    case actionTypes.TOGGLE_BASIC_INFO:
      enrollStore.basicInfoOpen = !enrollStore.basicInfoOpen;
      enrollStore.notify();
      break;
    case actionTypes.TOGGLE_PREFERENCES:
      enrollStore.preferencesOpen = !enrollStore.preferencesOpen;
      enrollStore.notify();
      break;
    }
  }
);

export default enrollStore;
