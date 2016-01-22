import React from 'react';
import MenuButton from './MenuButton';

class Menu extends React.Component {
  checkIfButtonIsActive(buttonName) {
    const { activeButton } = this.props;
    return buttonName === activeButton;
  }

  render() {
    return (
      <div className="buttons-group">
        <MenuButton url="/enroll" name="Enroll" isActive={this.checkIfButtonIsActive("Enroll")} />
        <MenuButton url="/participants" name="See Students" isActive={this.checkIfButtonIsActive("Participants")} />
      </div>
    )
  }
}

Menu.propTypes = {
  activeButton: React.PropTypes.string
}

export default Menu;
