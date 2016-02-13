import React from 'react';
import Error from '../shared/Error';
import EnrollActionCreator from '../../action_creators/EnrollActionCreator';
import { connect } from 'react-redux';

class Preferences extends React.Component {
  value() {
    return {
      house: this.refs.house.value,
      pet: this.refs.pet.value
    }
  }

  toggleForm() {
    const action = EnrollActionCreator.togglePreferences();
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
        <legend onClick={this.toggleForm.bind(this)}>Magical Preferences</legend>
        <div className={this.formVisibilityCss()}>
          <label htmlFor="house">House</label>
          {this.renderErrorForField("house")}
          <div className="select-wrapper">
            <select name="house" defaultValue="" ref="house">
              <option value="" disabled>-- Our choices show what we truly are --</option>
              <option value="gryffindor">Gryffindor</option>
              <option value="slytherin">Slytherin</option>
              <option value="ravenclaw">Raveclaw</option>
              <option value="hufflepuff">Hufflepuff</option>
            </select>
          </div>
          <label htmlFor="pet">Pet Companion</label>
          {this.renderErrorForField("pet")}
          <div className="select-wrapper">
            <select name="pet" defaultValue="" ref="pet">
              <option value="" disabled>-- Choose Pet Wisely --</option>
              <option value="owl">Owl</option>
              <option value="cat">Cat</option>
              <option value="unicorn">Unicorn</option>
              <option value="toad">Toad</option>
              <option value="snake">Snake</option>
            </select>
          </div>
        </div>
      </fieldset>
    )
  }
}

function select(state) {
  return {
    open: state.enroll.isPreferencesOpen
  }
}

export default connect(select)(Preferences);
