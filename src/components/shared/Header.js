import React from 'react';
import { Link } from 'react-router'

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img src="../img/lunarts-logo-collapsed.png" className="logo"/>
        </Link>
      </header>
    )
  }
}

export default Header;
