import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Avatar, Button } from '@mui/material';

import { toggleBio } from '../reducers/slice';


const AvatarContainer = (props) => {
  const dispatch = useDispatch();

  const bio = props.bio;
  const togBio = (action) => dispatch(toggleBio(action)); // MLCK
    
  // console.log('avatar container props', this.props);
  return (
    <div className="avatar-container">
      <Button id= { bio.gitHub } className="iris" onClick={ togBio }>
        <Avatar 
          alt={ bio.gitHub }
          src={ `build/assets/${bio.gitHub}.jpg` }
          sx={ { width: 120, height: 120 } } 
        >
          {/* <img src="build/assets/305.jpg" /> */}
          <Avatar 
            alt={ bio.gitHub }
            src="build/assets/305.jpg" 
            sx={ { width: 120, height: 120 } } 
          />
        </Avatar>
      </Button>  
      <Button id= { bio.gitHub } className="name" onClick={ toggleBio }>
        { bio.preferredName }
      </Button>
    </div>
  );
};

export default AvatarContainer;