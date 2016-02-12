import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match } from 'react-router';
import routes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import store from './store';
import { Provider } from 'react-redux';

const history = createBrowserHistory();

var app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
app);
