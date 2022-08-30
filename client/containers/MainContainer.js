import React, { Component } from 'react';
import Iris from '../components/Iris.js';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">The Codesmith Family</h1>
          <Iris/>
          <Iris/>
        </div>
      </div>
    );
  }

}

export default MainContainer;