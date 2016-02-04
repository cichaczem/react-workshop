import AppDispatcher from '../AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import { EventEmitter } from 'events';
import API from '../lib/API';

const CHANGE_EVENT = 'change';

class ParticipantsStore extends EventEmitter {
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

    this._students = [];
  }

  getStudents() {
    return this._students;
  }
}

const participantsStore = new ParticipantsStore();

participantsStore.dispatchToken = AppDispatcher.register((payload) => {
  switch (payload.actionType) {
  case ActionTypes.REQUEST_STUDENTS:
    participantsStore._students = new API().getStudents();
    participantsStore.emitChange();
    break;

  default:
    // Do nothing
  }
});

export default participantsStore;
