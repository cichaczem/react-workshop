import React from 'react';
import Header from '../components/shared/Header';
import Menu from '../components/shared/Menu';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
