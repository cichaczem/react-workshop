import React from 'react';
import Error from '../shared/Error';

class BasicInfo extends React.Component {
  value() {
    return {
      name: this.refs.name.value,
      surname: this.refs.surname.value
    }
  }

  formVisibilityCss() {
    const { isOpen } = this.props;
    const common = "fields";
    const visible = "active";
    return isOpen ? `${common} ${visible}` : common;
  }

  renderErrorForField(field) {
    const {errors} = this.props;
    if(errors && Object.keys(errors).includes(field))
      return <Error message={errors[field][0]} />
  }

  render() {
    return (
      <fieldset>
        <legend onClick={this.props.toggle}>Basic Info</legend>
        <div className={this.formVisibilityCss()}>
          <label htmlFor="name">First Name</label>
          {this.renderErrorForField("name")}
          <input type="text" name="name" placeholder="Arien" ref="name" />
          <label htmlFor="surname">Surname</label>
          {this.renderErrorForField("surname")}
          <input type="text" name="surname" placeholder="Doriath" ref="surname" />
        </div>
      </fieldset>
    )
  }
}

export default BasicInfo;
