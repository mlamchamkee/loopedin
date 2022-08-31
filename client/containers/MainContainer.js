import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import BioContainer from './BioContainer.js';
import { Button } from '@mui/material';

class MainContainer extends Component {
  render() {
    console.log('main container props', this.props);

    const { search, bios, toggleDialog } = this.props;

    return(
      <div className="container">
        <div className="outerBox">
          <NavBar search={ search }/>
          <BioContainer search={ search } bios={ bios }/>
          <Button 
            id="dialog-button" 
            variant="contained" 
            onClick={ toggleDialog } 
          >
            Create Profile
          </Button>
          {/* <Button id="dialog-button" innerText="Create Profile" toggleDialog={this.props.toggleDialog}/> */}
        </div>
      </div>
    );
  }

}

export default MainContainer;