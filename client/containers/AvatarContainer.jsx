import React from 'react';

import { Avatar, Button } from '@mui/material';

import '../assets/crgb0s.jpg';
import '../assets/mlamchamkee.jpg';

const handleClick = () => {
  console.log('click');
};
class AvatarContainer extends React.Component {
  render() {
    const { bio, toggleDialog } = this.props;
    console.log('avatar container props', this.props);
    return (
      <div className="ava-container">
        <Button className="iris" onClick={ toggleDialog }>
          <Avatar 
            alt={ bio.gitHub }
            // src={ `client/assets/${bio.gitHub}.jpg` }
            src="https://httpstatusdogs.com/img/300.jpg"
            sx={ { width: 120, height: 120 } } 
            // onClick={ toggleDialog }
          />
          {/* onClick={ toggleDialog } */}
        </Button>  
        <Button className="name" onClick={ handleClick }>
          { bio.preferredName }
        </Button>
      </div>
    );
  }
}

export default AvatarContainer;