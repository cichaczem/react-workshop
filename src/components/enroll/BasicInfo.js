import React from 'react';
import Error from '../shared/Error';
import EnrollActionCreator from '../../action_creators/EnrollActionCreator';
import { connect } from 'react-redux';

class BasicInfo extends React.Component {
  toggleForm() {
    const action = EnrollActionCreator.toggleBasicInfo();
    this.props.dispatch(action);
  }

  formVisibilityCss() {
    const { open } = this.props;
    const common = "fields";
    const visible = "active";
    return open ? `${common} ${visible}` : common;
  }

  renderErrorForField(field) {
    const {errors} = this.props;
    if(errors && Object.keys(errors).includes(field))
      return <Error message={errors[field][0]} />
  }

  render() {
    return (
      <fieldset>
        <legend onClick={this.toggleForm.bind(this)}>Basic Info</legend>
        <div className={this.formVisibilityCss()}>
          <label htmlFor="name">First Name</label>
          {this.renderErrorForField("name")}
          <input type="text" name="name" placeholder="Arien"
                 onChange={this.props.onChanged('name')} />
          <label htmlFor="surname">Surname</label>
          {this.renderErrorForField("surname")}
          <input type="text" name="surname" placeholder="Doriath"
                 onChange={this.props.onChanged('surname')} />
        </div>
      </fieldset>
    )
  }
}

function select(state) {
  return {
    open: state.enroll.isBasicInfoOpen
  }
}

export default connect(select)(BasicInfo);
