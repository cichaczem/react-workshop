import ActionTypes from '../constants/ActionTypes';
import API from '../lib/API';

const EnrollActionCreator = {
  toggleBasicInfo() {
    return {
      type: ActionTypes.TOGGLE_BASIC_INFO
    }
  },

  togglePreferences() {
    return {
      type: ActionTypes.TOGGLE_PREFERENCES
    }
  },

  requestStudentEnrollment(student) {
    var that = this;

    function successEnrollment(dispatch){
      return function(students) {
        dispatch(that._receivedStudentEnrollmentSuccess(students));
      }
    };

    function errorEnrollment(dispatch){
      return function(errors) {
        dispatch(that._receivedStudentEnrollmentFailure(errors));
      }
    };

    return (dispatch) => {
      dispatch(this._enrollmentInProgress());
      return new API().
        addStudent(student.name, student.surname, student.house, student.pet).
        then(successEnrollment(dispatch), errorEnrollment(dispatch));
    };
  },

  _receivedStudentEnrollmentSuccess(students) {
    return {
      type: ActionTypes.ENROLL_STUDENT_SUCCESS,
      students: students,
    }
  },

  _receivedStudentEnrollmentFailure(errors) {
    return {
      type: ActionTypes.ENROLL_STUDENT_FAILURE,
      errors: errors
    }
  },

  _enrollmentInProgress(){
    return {
      type: ActionTypes.ENROLL_STUDENT_INPROGRESS
    }
  }
};

export default EnrollActionCreator;
