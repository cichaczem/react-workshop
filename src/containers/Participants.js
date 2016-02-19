import React from 'react';
import Menu from '../components/shared/Menu';
import MenuButtonNames from '../lib/MenuButtonNames';
import Student from '../components/participants/Student';
import ParticipantsActionCreator from '../action_creators/ParticipantsActionCreator';
import { connect } from 'react-redux';

class Participants extends React.Component {
  static fetchData(dispatch, params) {
    let action = ParticipantsActionCreator.requestStudents();
    return dispatch(action);
  }

  componentWillMount() {
    Participants.fetchData(this.props.dispatch);
  }

  renderStudents() {
    return this.props.students.map(
      (student) => <Student data={student} key={student.id} />
    );
  }

  render() {
    return (
      <div>
        <Menu activeButton={MenuButtonNames.PARTICIPANTS} />
        <h1>List of enrolled students </h1>
        <ul className="students">
          {this.renderStudents()}
        </ul>
      </div>
    )
  }
}

function select(state) {
  return {
    students: state.participants.all
  }
}

export default connect(select)(Participants);
