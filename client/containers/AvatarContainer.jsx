import React from 'react';

import { Avatar, Button } from '@mui/material';

const handleClick = () => {
  console.log('click');
};
class AvatarContainer extends React.Component {
  render() {
    const { bio, toggleBio } = this.props;
    // console.log('avatar container props', this.props);
    return (
      <div className="avatar-container">
        <Button id= { bio.gitHub } className="iris" onClick={ toggleBio }>
          <Avatar 
            alt={ bio.gitHub }
            src={ `build/assets/${bio.gitHub}.jpg` }
            // src="https://httpstatusdogs.com/img/300.jpg"
            sx={ { width: 120, height: 120 } } 
          />
        </Button>  
        <Button id= { bio.gitHub } className="name" onClick={ toggleBio }>
          { bio.preferredName }
        </Button>
      </div>
    );
  }
}

export default AvatarContainer;