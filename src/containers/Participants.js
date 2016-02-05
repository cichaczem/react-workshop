import React from 'react';
import Menu from '../components/shared/Menu';
import MenuButtonNames from '../lib/MenuButtonNames';
import Student from '../components/participants/Student';
import API from '../lib/API';

class Participants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }

  componentWillMount() {
    this.setState({
      students: new API().getStudents()
    });
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
