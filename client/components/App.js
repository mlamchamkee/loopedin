import React, { Component } from 'react';
import MainContainer from '../containers/MainContainer.js';
import Form from './Form.js';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      showDialog: true,
      showBios: []
    };
    this.toggleDialog = this.toggleDialog.bind(this);
    this.postProfile = this.postProfile.bind(this);
    this.search = this.search.bind(this);
  }

  toggleDialog() {
    console.log('toggleDialog running');
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
        // preferredName: document.querySelector('#preferred-name'),
        gitHub: document.querySelector('#github').value,
      })
    };

    // console.log('Handle Click invoked');
    // console.log(requestOptions.body);
    fetch('/bios/', requestOptions)
      .then(response => response.json())
      .then(() => this.toggleDialog())
      .catch(err => console.log('ERROR: Unable to create profile', err));
  }

  search() {
    const skill = document.querySelector('#search').value;
    console.log('Search', skill);

    fetch(`/search/${skill}`)
      .then(response => response.json())
      .then((data) => console.log(data))
      .catch(err => console.log('ERROR: Unable to search skill', err));
  }

  render() {
    return (
      <div>
        <MainContainer 
          id="main-container" 
          toggleDialog={ this.toggleDialog }
          search={ this.search }
          bios={ this.state.bios }
        />
        <Form 
          id="dialog" 
          show={ this.state.showDialog } 
          toggleDialog={ this.toggleDialog } 
          postProfile={ this.postProfile }
        />
      </div>
    );        
  }
}

export default App;