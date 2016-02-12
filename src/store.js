import { createStore, combineReducers } from 'redux';
import EnrollReducer from './reducers/EnrollReducer';

const reducers = combineReducers({
  enroll: EnrollReducer
})

let store = createStore(reducers);

export default store;
