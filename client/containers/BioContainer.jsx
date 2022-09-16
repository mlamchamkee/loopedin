import React from 'react';
import { useSelector } from 'react-redux';

import AvatarContainer from './AvatarContainer.jsx';

const BioContainer = (props) => {

  const bios = useSelector((state) => state.slice.bios); 
  const bioElems = [];

  if (bios) {
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