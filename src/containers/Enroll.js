import React from 'react';
import Menu from '../components/shared/Menu';
import MenuButtonNames from '../lib/MenuButtonNames';

class Enroll extends React.Component {
  render() {
    return (
      <div>
        <Menu activeButton={MenuButtonNames.ENROLL} />
        <form>
          <fieldset>
            <legend>Basic Info</legend>
            <div className="fields active">
              <label htmlFor="name">First Name</label>
              <input type="text" name="name" placeholder="Arien" />
              <label htmlFor="surname">Surname</label>
              <input type="text" name="surname" placeholder="Doriath" />
            </div>
          </fieldset>
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
          </fieldset>
          <div className="action-holder">
            <input type="submit" value="Enroll" />
          </div>
        </form>
      </div>
    )
  }
}

export default Enroll;
