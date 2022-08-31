import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.js';
import Form from './components/Form.js';

class App extends Component {
  constructor() {
    super();
    console.log('App constructed');
    this.state = { 
      showDialog: false,
      bios: [],
    };
    // Binding functions to App context
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

  search(e) {
    let skill;
    if (e) skill = e.target.value;
    console.log('Search', skill);

    let endpoint;
    if (skill) endpoint = `/search/${skill}`;
    else endpoint = '/bios/';

    console.log('Search', endpoint);

    fetch(endpoint)
      .then(response => response.json())
      .then((data) => this.setState({ bios: data }))
      // .then((data) => {
      //   console.log('SEARCH', data);
      // })
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