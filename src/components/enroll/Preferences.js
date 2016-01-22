import React from 'react';

class Preferences extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Magical Preferences</legend>
        <div className="fields active">
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
        <div className="action-holder">
          <input type="submit" value="Enroll" />
        </div>
      </fieldset>
    )
  }
}

export default Preferences;
