import React, { Component } from 'react';
import MainContainer from '../containers/MainContainer.js';
import Form from './Form.js';

class App extends Component {
  constructor() {
    super();
    console.log('App constructed');
    this.state = { 
      showDialog: true,
      bios: [],
    };

    // Binding functions to App context
    this.toggleDialog = this.toggleDialog.bind(this);
    this.postProfile = this.postProfile.bind(this);
    this.getAll = this.getAll.bind(this);
    this.search = this.search.bind(this);

    // Async fetch call to get all the bios and update state
    // this.getAll();
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

  getAll() {
    console.log('Fetching All - Async');
    fetch('/bios/')
      .then(response => response.json())
      .then((data) => console.log('GET ALL Res', data))
      .then((data) => this.setState({ bios: data }))
      .then((data) => console.log('GET ALL Data', data))
      .catch(err => console.log('ERROR: Unable to getAll Bios', err));
    
    // const bios = await fetch('/bios/');
    // await this.setState({ bios: bios.json() });
    // console.log('GET ALL Res', bios);
  }

  search() {
    const skill = document.querySelector('#search').value;
    console.log('Search', skill);

    if (skill) {
      fetch(`/search/${skill}`)
        .then(response => response.json())
        .then((data) => this.setState({ bios: data }))
        .then((data) => console.log('SEARCH', data))
        .catch(err => console.log('ERROR: Unable to search skill', err));
    }
    else this.getAll();
  }

  render() {
    return (
      <div>
        <MainContainer 
          id="main-container" 
          getAll={ this.getAll }
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