import { createStore, combineReducers } from 'redux';
import EnrollReducer from './reducers/EnrollReducer';
import ParticipantsReducer from './reducers/ParticipantsReducer';

const reducers = combineReducers({
  enroll: EnrollReducer,
  participants: ParticipantsReducer
})

let store = createStore(reducers);

export default store;
