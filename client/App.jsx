import React, { Component } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import MainContainer from './containers/MainContainer.jsx';
import Form from './components/Form.jsx';
import BioDialog from './components/BioDialog.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3da991',
      contrastText: '#fff'
    },
  },
});

class App extends Component {
  constructor() {
    super();
    console.log('App constructed');
    this.state = { 
      showDialog: false,
      showBio: true,
      bios: [],
      selectedInd: 2, // ML
    };
    // Binding functions to App context
    this.toggleDialog = this.toggleDialog.bind(this);
    this.toggleBio = this.toggleBio.bind(this);
    this.postProfile = this.postProfile.bind(this);
    this.search = this.search.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
  }

  // opens and closes dialog box to submit user profiles
  toggleDialog() {
    // console.log('toggleDialog running');
    if (this.state.showDialog) this.setState({ showDialog: false });
    else this.setState({ showDialog: true });
  }

  // opens and closes dialog box viewing/deleting user profile
  toggleBio() {
    console.log('toggle Bio running');
    if (this.state.showBio) this.setState({ showBio: false });
    else this.setState({ showBio: true });
  }

  // submits a POST request to save a profile on the database
  postProfile() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        fullName: document.querySelector('#full-name').value,
        preferredName: document.querySelector('#preferred-name').value,
        gitHub: document.querySelector('#github').value,
        home: document.querySelector('#home').value,
        preCodesmith: document.querySelector('#preCodesmith').value,
        goals: document.querySelector('#goals').value,
        hobbies: document.querySelector('#hobbies').value,
        funFact: document.querySelector('#funFact').value,
        skills: document.querySelector('#skills').value,
      })
    };

    fetch('/bios/', requestOptions)
      .then(response => response.json())
      .then(() => this.toggleDialog())
      .catch(err => console.log('ERROR: Unable to create profile', err));
    
    // submit a GET request to update all bios
    this.search();
  }

  // submits a GET request to find a profiles on the database, defaults to finding all if no arg provided
  search(e) {
    let skill;
    if (e) skill = e.target.value;
    // console.log('Search', skill);

    let endpoint;
    if (skill) endpoint = `/search/${skill}`;
    else endpoint = '/bios/';

    // console.log('Search', endpoint);

    fetch(endpoint)
      .then(response => response.json())
      .then((data) => this.setState({ bios: data }))
      // .then((data) => {
      //   console.log('SEARCH', data);
      // })
      .catch(err => console.log('ERROR: Unable to search skill', err));


  }

  // submits a DELETE request to delete a profile on the database, argument is event from button click
  deleteProfile(e) {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        gitHub: e.target.id
      })
    };

    fetch('/bios/', requestOptions)
      .then(response => response.json())
      .then(() => this.toggleBio())
      .catch(err => console.log('ERROR: Unable to delete profile', err));

    // submit a GET request to update all bios
    this.search();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainContainer 
          id="main-container" 
          toggleDialog={ this.toggleDialog }
          toggleBio={ this.toggleDialog }
          search={ this.search }
          bios={ this.state.bios }
        />
        <Form 
          id="dialog" 
          show={ this.state.showDialog } 
          getAll = { this.search }
          toggleDialog={ this.toggleDialog } 
          postProfile={ this.postProfile }
        />
        <BioDialog 
          id="dialog-bio" 
          show={ this.state.showBio }
          getAll = { this.search }
          deleteBio={ this.deleteProfile }
          toggleBio={ this.toggleBio } 
          bio={ this.state.bios[this.state.selectedInd] }
        />
      </ThemeProvider>
    );        
  }
}

export default App;