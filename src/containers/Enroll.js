import React from 'react';
import Menu from '../components/shared/Menu';
import MenuButtonNames from '../lib/MenuButtonNames';
import BasicInfo from '../components/enroll/BasicInfo';
import Preferences from '../components/enroll/Preferences';
import API from '../lib/API';
import EnrollActionCreator from '../action_creators/EnrollActionCreator';
import { connect } from 'react-redux';

class Enroll extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const student = Object.assign({}, this.refs.basic.value(), {pet: "Owl", house: "Gryffindor"});
    const action = EnrollActionCreator.requestStudentEnrollment(student);
    this.props.dispatch(action);
  }

  redirectToList() {
    return this.props.history.pushState(null, "/participants");
  }

  toggleForm() {
    const action = EnrollActionCreator.toggleBasicInfo();
    this.props.dispatch(action);
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.enrolled) { this.redirectToList() };
  }

  render() {
    return (
      <div>
        <Menu activeButton={MenuButtonNames.ENROLL} />
        <form>
          <BasicInfo ref="basic"
            toggle={this.toggleForm.bind(this)}
            isOpen={this.props.isBasicInfoOpen}
            errors={this.props.errors} />
          <div className="action-holder">
            <p>{this.props.enrolling ? "enrolling..." : ""}</p>
            <input type="submit" value="Enroll" onClick={this.handleSubmit.bind(this)} />
          </div>
        </form>
      </div>
    )
  }
}


function select(state) {
  return {
    isBasicInfoOpen: state.enroll.isBasicInfoOpen,
    enrolling: state.enroll.enrolling,
    enrolled: state.enroll.enrolled,
    errors: state.enroll.errors,
  }
}

export default connect(select)(Enroll)
