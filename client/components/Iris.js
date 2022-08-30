import React from 'react';
import Avatar from './Avatar.js';
class Iris extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="iris">
        <p>{this.props.name}</p>
        {/* <Avatar/> */}
      </div>
    );
  }
}

export default Iris;