import React from 'react';

class Student extends React.Component {
  studentName() {
    const { name, surname } = this.props.data;
    return `${name} ${surname}`;
  }

  render() {
    const { house, pet } = this.props.data;

    return (
      <li className="student-item">
        <h2>{this.studentName()}</h2>
        <p>
          <strong>House:</strong>
          {house}
        </p>
        <p>
          <strong> Pet Companion: </strong>
          {pet}
        </p>
      </li>
    )
  }
}

Student.PropTypes = {
  data: React.PropTypes.object.isRequired
}

export default Student;
