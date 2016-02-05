import React from 'react';
import { Route, IndexRoute } from 'react-router'
import Layout from './containers/Layout';
import Main from "./containers/Main";
import Participants from "./containers/Participants";
import Enroll from "./containers/Enroll";

export default (
  <Route path="/" name="root" component={Layout}>
    <IndexRoute component={Main} />
    <Route path="participants" component={Participants} />
    <Route path="enroll" component={Enroll} />
    <Route path="*" component={Main} />
  </Route>
)
