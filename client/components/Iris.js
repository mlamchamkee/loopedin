import React from 'react';
import Avatar from './Avatar.js';
class Iris extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="irisz">
        <Avatar/>
      </div>
    );
  }
}

export default Iris;