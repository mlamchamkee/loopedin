import React from 'react';
import { useSelector } from 'react-redux';
import { Box, CircularProgress } from '@mui/material';
import AvatarContainer from './AvatarContainer.jsx';

const BioContainer = (props) => {

  const status = useSelector((state) => state.slice.status); 
  const bios = useSelector((state) => state.slice.bios); 
  const bioElems = [];

  if (status === 'loading') return (
    <Box id='spinner-container'>
      <CircularProgress/>
    </Box>
  );

  if (status === 'fulfilled') {
    for (const bio of bios) {
      bioElems.push(<AvatarContainer key={bio.gitHub} bio={ bio }/>);
    }
  }
  return (
    <div id="bio-container">
      {bioElems}
    </div>
  );
};

export default BioContainer;