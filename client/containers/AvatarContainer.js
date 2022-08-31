import React from 'react';
import Iris from '../components/Iris.js';
import { Avatar } from '@mui/material';

class AvatarContainer extends React.Component {
  render() {
    const { bio } = this.props;
    return (
      <div className="ava-container">
        <Avatar 
          alt={ bio.gitHub }
          src="https://httpstatusdogs.com/img/100.jpg"
          sx={ { width: 120, height: 120 } } 
        />
        <div className="name">
          { bio.fullName }
        </div>
      </div>
    );
  }
}

export default AvatarContainer;