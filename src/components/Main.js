import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <div>
        <header>
          <a href="/">
            <img src="../img/lunarts-logo-collapsed.png" className="logo"/>
          </a>
        </header>
        <section className="main" aria-role="main">
          <h1> School of Witchcraft & Wizardry </h1>
          <img src="../img/wizard.png" className="wizard"/>
          <div className="buttons-group">
            <a href="#" className="button secondary">Enroll</a>
            <a href="#" className="button secondary">See Students</a>
          </div>
        </section>
      </div>
    )
  }
};

export default Main;
