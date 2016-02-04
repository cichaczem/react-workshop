import BaseStore from './BaseStore';
import AppDispatcher from '../AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import API from '../lib/API';

class ParticipantsStore extends BaseStore {
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
