import BaseStore from './BaseStore';
import AppDispatcher from '../AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

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
    participantsStore._students = payload.students;
    participantsStore.emitChange();
    break;

  default:
    // Do nothing
  }
});

export default participantsStore;
