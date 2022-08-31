import React, { Component } from 'react';
import MainContainer from '../containers/MainContainer.js';
import Form from './Form.js';

class App extends Component {
  constructor() {
    super();
    this.state = { showModal: true };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    console.log('Im running up that hill');
    if (this.state.showModal) this.setState({ showModal: false });
    else this.setState({ showModal: true });
  }

  toggleModalSubmission() {
    // modal for success message
  }

  // submits a post request to save profile on the database
  postProfile() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        fullName: document.querySelector('#full-name'),
        // chosenName: document.querySelector('#preferred-name'),
        gitHub: document.querySelector('#github'),
      })
    };

    fetch('/bios/', requestOptions)
      .then(response => response.json())
      .then(() => this.toggleModal())
      .catch(err => console.log('ERROR: Unable to create profile', err));
  }

  render() {
    return (
      <div>
        <MainContainer id="main-container" toggleModal={ this.toggleModal }/>
        {/* <Form id="modal" show={ this.state.showModal } postProfile={ this.postProfile }/> */}
      </div>
    );        
  }
}

export default App;