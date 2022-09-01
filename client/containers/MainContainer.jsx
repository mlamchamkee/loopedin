import React, { Component } from 'react';
import { Button } from '@mui/material';

import BioContainer from './BioContainer.jsx';
import NavBar from '../components/NavBar.jsx';

class MainContainer extends Component {
  render() {
    const { search, bios, toggleBio } = this.props;

    return(
      <div id="main-container" className="container">
        <NavBar search={ search } />
        <BioContainer search={ search } bios={ bios } toggleBio={ toggleBio } />
        <div id="button-container">
          <Button 
            id="dialog-button" 
            variant="contained" 
            onClick={ toggleBio } 
          >
          Create Profile
          </Button>
        </div>
      </div>
    );
  }
}

export default MainContainer;