import React, { Component } from 'react';
import OuterIris from '../components/OuterIris.js';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">The Codesmith Family</h1>
          <OuterIris/>
        </div>
      </div>
    );
  }

}

export default MainContainer;