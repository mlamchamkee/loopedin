import React from 'react';

import AvatarContainer from './AvatarContainer.jsx';

class BioContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.search();
    console.log('BioContainer Constructuted');
  }

  render() {
    const { bios, toggleBio } = this.props;
    const bioElems = [];
    // console.log('BioContainer Bios', bios);
    if (bios) {
      for (const bio of bios) {
        bioElems.push(<AvatarContainer bio={ bio } toggleBio={ toggleBio }/>);
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