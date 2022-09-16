import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import MainContainer from './containers/MainContainer.jsx';
import Form from './components/Form.jsx';
import BioDialog from './components/BioDialog.jsx';
import LoginPage from './containers/Login.jsx';

import { getProfiles } from './reducers/slice';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3da991',
      contrastText: '#fff'
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

class App extends Component {
  constructor() {
    super();
    // const dispatch = useDispatch();
    // const getBios = () => dispatch(getProfiles());
    // getBios();
    // const bios = useSelector((state) => state.slice.bios); 
    console.log('App constructed');
    // console.log('BIOS', bios);
    // this.state = { 
    //   userVerified: false,
    //   showCreate: false,
    //   showBio: false,
    //   bios: [],
    //   selectedBio: undefined,
    // };
    // Binding functions to App context
    // this.toggleCreate = this.toggleCreate.bind(this);
    // this.toggleBio = this.toggleBio.bind(this);
    // this.postProfile = this.postProfile.bind(this);
    // this.search = this.search.bind(this);
    // this.deleteProfile = this.deleteProfile.bind(this);
  }

  // Allows users to press escape key to close Dialogs
  // componentDidMount() {
  //   console.log('App mounted');
  //   document.addEventListener('DOMContentLoaded', () => {
  //     const body = document.querySelector('body');

  //     body.addEventListener('keydown', (e) => {
  //       if (e.key === 'Escape') {
  //         // console.log(e.key, 'pressed');
  //         this.setState({
  //           showCreate: false,
  //           showBio: false,
  //         });
  //       }
  //     }); 
  //   });
  // }
  // // opens and closes dialog box to submit user profiles
  // toggleCreate() {
  //   // console.log('toggleDialog running');
  //   if (this.state.showCreate) this.setState({ showCreate: false });
  //   else this.setState({ showCreate: true });
  // }

  // // opens and closes dialog box viewing/deleting user profile
  // toggleBio(e) {
  //   if (e) {
  //     const gitHub = e.target.id || e.target.alt;
  //     console.log('E Target', gitHub);
  //     const selectedBio = this.state.bios.filter(obj => obj.gitHub === gitHub)[0];
  //     this.setState({ selectedBio: selectedBio });
  //   }
  //   console.log('toggle Bio running');
  //   if (this.state.showBio) this.setState({ showBio: false });
  //   else this.setState({ showBio: true });
  // }

  // // submits a POST request to save a profile on the database
  // postProfile() {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ 
  //       fullName: document.querySelector('#full-name').value,
  //       preferredName: document.querySelector('#preferred-name').value,
  //       gitHub: document.querySelector('#github').value,
  //       home: document.querySelector('#home').value,
  //       preCodesmith: document.querySelector('#preCodesmith').value,
  //       goals: document.querySelector('#goals').value,
  //       hobbies: document.querySelector('#hobbies').value,
  //       funFact: document.querySelector('#funFact').value,
  //       skills: document.querySelector('#skills').value,
  //     })
  //   };

  //   fetch('/bios/', requestOptions)
  //     .then(response => response.json())
  //     .then(() => this.toggleCreate())
  //     .catch(err => console.log('ERROR: Unable to create profile', err));
    
  //   // submit a GET request to update all bios
  //   this.search();
  // }

  // // submits a GET request to find a profiles on the database, defaults to finding all if no arg provided
  // search(e) {
  //   let skill;
  //   if (e) skill = e.target.value;
  //   // console.log('Search', skill);

  //   let endpoint;
  //   if (skill) endpoint = `/search/${skill}`;
  //   else endpoint = '/bios/';

  //   // console.log('Search', endpoint);

  //   fetch(endpoint)
  //     .then(response => response.json())
  //     .then((data) => this.setState({ bios: data }))
  //     // .then((data) => {
  //     //   console.log('SEARCH', data);
  //     // })
  //     .catch(err => console.log('ERROR: Unable to search skill', err));
  // }

  // // submits a DELETE request to delete a profile on the database, argument is event from button click
  // deleteProfile(e) {
  //   const gitHub = e.target.id || e.target.alt;
  //   // console.log(e.target);
  //   const requestOptions = {
  //     method: 'DELETE',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ 
  //       gitHub: e.target.id
  //     })
  //   };

  //   fetch('/bios/', requestOptions)
  //     .then(response => response.json())
  //     .then(() => this.toggleBio())
  //     .catch(err => console.log('ERROR: Unable to delete profile', err));

  //   // submit a GET request to update all bios
  //   this.search();
  // }

  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* <LoginPage/> */}
        <MainContainer id="main-container" />
        <Form id="dialog" />
        <BioDialog id="dialog-bio" />
      </ThemeProvider>
    );        
  }
}

export default App;