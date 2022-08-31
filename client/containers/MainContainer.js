import React, { Component } from 'react';
import OuterIris from '../components/OuterIris.js';
import Button from '../components/Button.js';


class MainContainer extends Component {

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">The Codesmith Family</h1>
          <OuterIris/>
          <Button classname="button" innerText="Create Profile" toggleModal={this.props.toggleModal}/>
        </div>
      </div>
    );
  }

}

export default MainContainer;