import React from 'react';
import Iris from '../components/Iris.js';
import { Avatar, Button } from '@mui/material';

class AvatarContainer extends React.Component {
  render() {
    const { bio, toggleDialog } = this.props;
    console.log('avatar container props', this.props);
    return (
      <div className="ava-container">
        <Button className="iris" onClick={ toggleDialog }>
          <Avatar 
            alt={ bio.gitHub }
            src="https://httpstatusdogs.com/img/100.jpg"
            sx={ { width: 120, height: 120 } } 
            // onClick={ toggleDialog }
          />
          {/* onClick={ toggleDialog } */}
        </Button>  
        <Button className="name" onClick={ toggleDialog }>
          { bio.fullName }
        </Button>
      </div>
    );
  }
}

export default AvatarContainer;