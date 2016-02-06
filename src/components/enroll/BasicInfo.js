import React from 'react';
import Error from '../shared/Error';
import { toggleBasicInfo } from '../../actionsCreators/enrollActionCreators'
import enrollStore from '../../stores/enrollStore';

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: enrollStore.getBasicInfoOpen()
    }
  }

  componentWillMount() {
    enrollStore.subscribe(
      this.changeVisibility.bind(this)
    )
  }

  componentWillUnmount() {
    enrollStore.unsubscribe(
      this.changeVisibility.bind(this)
    )
  }

  changeVisibility() {
    this.setState({open: enrollStore.getBasicInfoOpen()})
  }

  value() {
    return {
      name: this.refs.name.value,
      surname: this.refs.surname.value
    }
  }

  toggleForm() {
    toggleBasicInfo();
  }

  formVisibilityCss() {
    const { open } = this.state;
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
