import React from 'react';
import MenuButton from './MenuButton';

class Menu extends React.Component {
  render() {
    return (
      <div className="buttons-group">
        <MenuButton url="/enroll" name="Enroll" isActive={false} />
        <MenuButton url="/participants" name="See Students" isActive={false} />
      </div>
    )
  }
}

export default Menu;
