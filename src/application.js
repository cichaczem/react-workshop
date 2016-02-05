import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match } from 'react-router';
import routes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory'

const history = createBrowserHistory();

var app = document.getElementById('app');

ReactDOM.render(<Router history={history} routes={routes} />, app)
