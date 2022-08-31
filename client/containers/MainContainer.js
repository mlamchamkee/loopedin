import React, { Component } from 'react';
import { Button } from '@mui/material';
import BioContainer from './BioContainer.js';
import NavBar from '../components/NavBar.js';
class MainContainer extends Component {
  render() {
    console.log('main container props', this.props);

    const { search, bios, toggleDialog } = this.props;

    return(
      <div id="main-container" className="container">
        <NavBar search={ search }/>
        <BioContainer search={ search } bios={ bios }/>
        <div id="button-container">
          <Button 
            id="dialog-button" 
            variant="contained" 
            onClick={ toggleDialog } 
          >
          Create Profile
          </Button>
        </div>
      </div>
    );
  }

}

export default MainContainer;