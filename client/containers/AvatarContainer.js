import React from 'react';
import Iris from '../components/Iris.js';
import { Avatar } from '@mui/material';

class AvatarContainer extends React.Component {
  render() {
    const { bio, toggleDialog } = this.props;
    return (
      <div className="ava-container">
        <button className="iris" onClick={ toggleDialog }>
          <Avatar 
            alt={ bio.gitHub }
            src="https://httpstatusdogs.com/img/100.jpg"
            sx={ { width: 120, height: 120 } } 
            // onClick={ toggleDialog }
          />
          {/* onClick={ toggleDialog } */}
        </button>  
        <button className="name" onClick={ toggleDialog }>
          { bio.fullName }
        </button>
      </div>
    );
  }
}

export default AvatarContainer;