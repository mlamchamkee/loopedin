import React from 'react';
import Iris from '../components/Iris.js';
import AvatarContainer from './AvatarContainer.js';
import { Avatar } from '@mui/material';

class BioContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.search();
    console.log('BioContainer Constructuted');
  }

  render() {
    const { bios } = this.props;
    const bioElems = [];
    // console.log('BioContainer Bios', bios);
    if (bios) {
      for (const bio of bios) {
        bioElems.push(<AvatarContainer bio={bio}/>);
        // bioElems.push(<Iris key={bio.gitHub} name={bio.fullName}/>);
      }
    }

    return (
      <div id="bio-container" className="outer-iris">
        {bioElems}
      </div>
    );
  }
}

export default BioContainer;