import React from 'react';
import MenuButton from './MenuButton';
import MenuButtonNames from '../../lib/MenuButtonNames';

class Menu extends React.Component {
  checkIfButtonIsActive(buttonName) {
    const { activeButton } = this.props;
    return buttonName === activeButton;
  }

  render() {
    return (
      <div className="buttons-group">
        <MenuButton url="/enroll"
                    name="Enroll"
                    isActive={this.checkIfButtonIsActive(MenuButtonNames.ENROLL)} />
        <MenuButton url="/participants"
                    name="See Students"
                    isActive={this.checkIfButtonIsActive(MenuButtonNames.PARTICIPANTS)} />
      </div>
    )
  }
}

Menu.propTypes = {
  activeButton: React.PropTypes.string
}

export default Menu;
