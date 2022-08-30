import React from 'react';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img className="avatar" url="https://www.w3schools.com/howto/img_avatar.png"/>
    );
  }
}

export default Avatar;