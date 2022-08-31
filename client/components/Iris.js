import React from 'react';
import Avatar from './Avatar.js';
class Iris extends React.Component {
  render() {
    return (
      <span className="iris">
        <p>{this.props.name}</p>
        {/* <Avatar/> */}
      </span>
    );
  }
}

export default Iris;