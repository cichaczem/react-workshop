import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router'
import createHistory from 'history/lib/createBrowserHistory'
import Layout from './containers/Layout';
import Main from "./containers/Main";
import Participants from "./containers/Participants";
import Enroll from "./containers/Enroll";

export default (
  <Router history={createHistory()}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main} />
      <Route path="participants" component={Participants} />
      <Route path="enroll" component={Enroll} />
    </Route>
  </Router>
)
