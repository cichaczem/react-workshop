import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/Layout';
import Main from "./containers/Main";
import Participants from "./containers/Participants";
import Enroll from "./containers/Enroll";

var app = document.getElementById('app');

ReactDOM.render(<Layout><Main /></Layout>, app);
