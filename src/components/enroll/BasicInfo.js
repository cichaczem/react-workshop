import React from 'react';

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  toggleForm() {
    this.setState({open: !this.state.open})
  }

  formVisibilityCss() {
    const { open } = this.state;
    const common = "fields";
    const visible = "active";
    return open ? `${common} ${visible}` : common;
  }

  render() {
    return (
      <fieldset>
        <legend onClick={this.toggleForm.bind(this)}>Basic Info</legend>
        <div className={this.formVisibilityCss()}>
          <label htmlFor="name">First Name</label>
          <input type="text" name="name" placeholder="Arien" />
          <label htmlFor="surname">Surname</label>
          <input type="text" name="surname" placeholder="Doriath" />
        </div>
      </fieldset>
    )
  }
}

export default BasicInfo;
