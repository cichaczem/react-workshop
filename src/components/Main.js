import React from 'react';
import Header from './shared/Header';
import HeaderFunction from './shared/HeaderFunction';
import Menu from './shared/Menu';

class Main extends React.Component {
  render() {
    return (
      <div>
        <HeaderFunction />
        <section className="main" aria-role="main">
          <h1> School of Witchcraft & Wizardry </h1>
          <img src="../img/wizard.png" className="wizard"/>
          <Menu />
        </section>
      </div>
    )
  }
};

export default Main;
