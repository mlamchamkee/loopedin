import React, { Component } from 'react';
 // import from child components...

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">The Codesmith Family</h1>
          { /* Start adding components here... */ }
        </div>
      </div>
    );
  }

}

export default MainContainer;