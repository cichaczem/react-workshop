import React from 'react';
import ReactDOM from 'react-dom';
import { reduxReactRouter, ReduxRouter } from 'redux-router';
import routes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { configureStore } from './store';
import { Provider } from 'react-redux';

const history = createBrowserHistory();
const initialState = __INITIAL_STATE__;
const store = configureStore(reduxReactRouter, createBrowserHistory, initialState);

var app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter routes={routes} />
  </Provider>,
app);
