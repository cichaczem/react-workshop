import React from 'react';

class BasicInfo extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Basic Info</legend>
        <div className="fields active">
          <label htmlFor="name">First Name</label>
          <input type="text" name="name" placeholder="Arien" />
          <label htmlFor="surname">Surname</label>
          <input type="text" name="surname" placeholder="Doriath" />
        </div>
        <div className="action-holder">
          <input type="submit" value="Next" />
        </div>
      </fieldset>
    )
  }
}

export default BasicInfo;
