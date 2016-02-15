import React from 'react';
import Menu from '../components/shared/Menu';
import MenuButtonNames from '../lib/MenuButtonNames';
import BasicInfo from '../components/enroll/BasicInfo';
import Preferences from '../components/enroll/Preferences';
import ParticipantsActionCreator from '../action_creators/ParticipantsActionCreator';
import EnrollActionCreator from '../action_creators/EnrollActionCreator';
import { connect } from 'react-redux';

class Enroll extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const action = ParticipantsActionCreator.addStudent(
      this.props.form, this.redirectToList.bind(this));
    this.props.dispatch(action);
  }

  onInputChanged(type) {
    return (e) => {
      const action = EnrollActionCreator.onChanged(type, e.target.value);
      this.props.dispatch(action);
    }
  }

  redirectToList() {
    return this.props.history.pushState(null, "/participants");
  }

  render() {
    const { errors } = this.props;

    return (
      <div>
        <Menu activeButton={MenuButtonNames.ENROLL} />
        <form>
          <BasicInfo errors={errors} onChanged={this.onInputChanged.bind(this)} />
          <Preferences errors={errors} onChanged={this.onInputChanged.bind(this)} />
          <div className="action-holder">
            <input type="submit" value="Enroll" onClick={this.handleSubmit.bind(this)} />
          </div>
        </form>
      </div>
    )
  }
}



function select(state) {
  return {
    errors: state.enroll.errors,
    form: state.enroll.form,
  }
}

export default connect(select)(Enroll);
