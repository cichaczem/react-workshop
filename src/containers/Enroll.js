import React from 'react';
import Menu from '../components/shared/Menu';
import MenuButtonNames from '../lib/MenuButtonNames';
import BasicInfo from '../components/enroll/BasicInfo';
import Preferences from '../components/enroll/Preferences';

class Enroll extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const student = Object.assign({}, this.refs.basic.value(), this.refs.preferences.value())
  }

  render() {
    return (
      <div>
        <Menu activeButton={MenuButtonNames.ENROLL} />
        <form>
          <BasicInfo ref="basic" />
          <Preferences ref="preferences" />
          <div className="action-holder">
            <input type="submit" value="Enroll" onClick={this.handleSubmit.bind(this)} />
          </div>
        </form>
      </div>
    )
  }
}

export default Enroll;
