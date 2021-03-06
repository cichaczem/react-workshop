import React from 'react';
import { Link } from 'react-router'

class MenuButton extends React.Component {
  buttonCss() {
    const { isActive } = this.props;
    const common = "button";
    const active = "primary";
    const inactive = "secondary";
    return isActive ? `${common} ${active}` : `${common} ${inactive}`;
  }

  render() {
    const { url, name } = this.props;
    return (
      <Link to={url} className={this.buttonCss()}>
        {name}
      </Link>
    )
  }
}

MenuButton.propTypes = {
  url: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  isActive: React.PropTypes.bool
}

export default MenuButton;
