import { createStore, combineReducers, applyMiddleware } from 'redux';
import EnrollReducer from './reducers/EnrollReducer';
import ParticipantsReducer from './reducers/ParticipantsReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  enroll: EnrollReducer,
  participants: ParticipantsReducer
})

export function configureStore(initialState = {}) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );
}

