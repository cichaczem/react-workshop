import React from 'react';
import Menu from '../components/shared/Menu';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1> School of Witchcraft & Wizardry </h1>
        <img src="/img/wizard.png" className="wizard"/>
        <Menu />
      </div>
    )
  }
};

export default Main;
