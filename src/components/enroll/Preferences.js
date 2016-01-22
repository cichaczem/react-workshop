import React from 'react';

class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
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
        <legend onClick={this.toggleForm.bind(this)}>Magical Preferences</legend>
        <div className={this.formVisibilityCss()}>
          <label htmlFor="house">House</label>
          <div className="select-wrapper">
            <select name="house" defaultValue="">
              <option value="" disabled>-- Our choices show what we truly are --</option>
              <option value="gryffindor">Gryffindor</option>
              <option value="slytherin">Slytherin</option>
              <option value="ravenclaw">Raveclaw</option>
              <option value="hufflepuff">Hufflepuff</option>
            </select>
          </div>
          <label htmlFor="pet">Pet Companion</label>
          <div className="select-wrapper">
            <select name="pet" defaultValue="">
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

export default Preferences;
