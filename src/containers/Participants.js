import React from 'react';
import Menu from '../components/shared/Menu';
import MenuButtonNames from '../lib/MenuButtonNames';
import Student from '../components/participants/Student';
import ParticipantsActionCreator from '../action_creators/ParticipantsActionCreator';
import ParticipantsStore from '../stores/ParticipantsStore';

class Participants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
    this._onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    ParticipantsStore.addChangeListener(this._onChange);

    ParticipantsActionCreator.requestStudents();
  }

  componentWillUnmount() {
    ParticipantsStore.removeChangeListener(this._onChange);
  }

  onChange() {
    this.setState({ students: ParticipantsStore.getStudents() });
  }

  renderStudents() {
    return this.state.students.map(
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

export default Participants;
