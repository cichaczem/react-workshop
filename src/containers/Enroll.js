import React from 'react';
import Menu from '../components/shared/Menu';
import MenuButtonNames from '../lib/MenuButtonNames';
import BasicInfo from '../components/enroll/BasicInfo';
import Preferences from '../components/enroll/Preferences';

class Enroll extends React.Component {
  render() {
    return (
      <div>
        <Menu activeButton={MenuButtonNames.ENROLL} />
        <form>
          <BasicInfo />
          <Preferences />
          <div className="action-holder">
            <input type="submit" value="Enroll" />
          </div>
        </form>
      </div>
    )
  }
}

export default Enroll;
