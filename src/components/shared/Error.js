import React from 'react';

class Error extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <p className="error">{message}</p>
    )
  }
}

export default Error;
