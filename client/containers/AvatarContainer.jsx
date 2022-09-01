import React from 'react';

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
            src={ `client/assets/${bio.gitHub} }`}
            sx={ { width: 120, height: 120 } } 
            // onClick={ toggleDialog }
          />
          {/* onClick={ toggleDialog } */}
        </Button>  
        <Button className="name" onClick={ toggleDialog }>
          { bio.preferredName }
        </Button>
      </div>
    );
  }
}

export default AvatarContainer;