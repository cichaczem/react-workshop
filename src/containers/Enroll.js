import React from 'react';
import Menu from '../components/shared/Menu';
import MenuButtonNames from '../lib/MenuButtonNames';
import BasicInfo from '../components/enroll/BasicInfo';
import Preferences from '../components/enroll/Preferences';
import API from '../lib/API';

class Enroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const student = Object.assign({}, this.refs.basic.value(), this.refs.preferences.value())
    const result = new API().addStudent(student.name, student.surname, student.house, student.pet)
    if (result.errors) {
      this.setErrors(result.errors);
    } else {
      this.redirectToList();
    }
  }

  setErrors(errors) {
    this.setState({errors: errors})
  }

  redirectToList() {
    return this.props.history.pushState(null, "/participants");
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <Menu activeButton={MenuButtonNames.ENROLL} />
        <form>
          <BasicInfo ref="basic" errors={errors} />
          <Preferences ref="preferences" errors={errors} />
          <div className="action-holder">
            <input type="submit" value="Enroll" onClick={this.handleSubmit.bind(this)} />
          </div>
        </form>
      </div>
    )
  }
}



export default Enroll;
