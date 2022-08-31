import React, { Component } from 'react';
import MainContainer from '../containers/MainContainer.js';
import Form from './Form.js';

class App extends Component {
  constructor() {
    super();
    this.state = { showDialog: true };
    this.toggleDialog = this.toggleDialog.bind(this);
    this.postProfile = this.postProfile.bind(this);
  }

  toggleDialog() {
    console.log('Im running up that hill');
    if (this.state.showDialog) this.setState({ showDialog: false });
    else this.setState({ showDialog: true });
  }

  toggleDialogSubmission() {
    // modal for success message
  }

  // submits a post request to save profile on the database
  postProfile() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        fullName: document.querySelector('#full-name').value,
        // chosenName: document.querySelector('#preferred-name'),
        gitHub: document.querySelector('#github').value,
      })
    };

    // console.log('Handle Click invoked');
    // console.log(requestOptions.body);
    fetch('/bios/', requestOptions)
      .then(response => response.json())
      // .then(() => this.toggleDialog())
      .catch(err => console.log('ERROR: Unable to create profile', err));
  }

  render() {
    return (
      <div>
        <MainContainer id="main-container" toggleDialog={ this.toggleDialog }/>
        <Form id="dialog" show={ this.state.showDialog } toggleDialog={ this.toggleDialog } postProfile={ this.postProfile }/>
      </div>
    );        
  }
}

export default App;