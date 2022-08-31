import React, { Component } from 'react';
import OuterIris from '../components/OuterIris.js';
import { Button } from '@mui/material';

class MainContainer extends Component {
  render() {
    console.log('main container props', this.props);
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">The Codesmith Family</h1>
          <OuterIris/>
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