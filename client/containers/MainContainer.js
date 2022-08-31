import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import OuterIris from '../components/OuterIris.js';
import { Button } from '@mui/material';

class MainContainer extends Component {
  render() {
    console.log('main container props', this.props);
    return(
      <div className="container">
        <div className="outerBox">
          <NavBar search={ this.props.search }/>
          <OuterIris />
          <Button 
            id="dialog-button" 
            variant="contained" 
            onClick={ this.props.toggleDialog } 
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