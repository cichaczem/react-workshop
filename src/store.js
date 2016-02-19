import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerStateReducer } from 'redux-router';
import EnrollReducer from './reducers/EnrollReducer';
import ParticipantsReducer from './reducers/ParticipantsReducer';
import thunk from 'redux-thunk';
import routes from './routes';

const reducers = combineReducers({
  enroll: EnrollReducer,
  participants: ParticipantsReducer,
  router: routerStateReducer
})

export function configureStore(reduxReactRouter, createHistory, initialState = {}) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    reduxReactRouter({ routes, createHistory })
  )(createStore);

  return createStoreWithMiddleware(reducers, initialState);
}
