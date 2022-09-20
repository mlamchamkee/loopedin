import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  status: 'loading',
  userVerified: false,
  showCreate: false,
  showBio: false,
  bios: [],
  selectedBio: undefined,
};

export const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    // opens and closes dialog box to submit user profiles
    toggleCreate: (state) => {
      state.showCreate = !state.showCreate;
    },
    // sets the selectedBio state to the profile clicked on by user
    toggleBio: (state, action) => {
      if (action.payload) {
        // const gitHub = action.payload.e.target.id || action.payload.e.target.alt;
        const gitHub = action.payload;
        // console.log('E Target', gitHub);
        state.selectedBio = state.bios.filter(obj => obj.gitHub === gitHub)[0];
      }
      state.showBio = !state.showBio;
    },
    // submits a POST request to save a profile on the database
    postProfile(state) {
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
        .catch(err => console.log('ERROR: Unable to create profile', err));
    },
    // submits a GET request to find a profiles on the database, defaults to finding all if no arg provided
    getProfiles(state, action) {
      console.log('Search', action);
      let endpoint = '/bios/';
      if (action.payload?.length) endpoint = `/search/${action.payload}`;

      fetch(endpoint)
        .then(response => response.json())
        .then((data) => {
          console.log('Fetched data', data);
          // console.log('State Bios', state.bios);
          // state.bios = data;
          // console.log('State Bios', state.bios);
        })
        
        .catch(err => console.log('ERROR: Unable to search skill', err));

      console.log('State Bios', state.bios);
    },
    // submits a DELETE request to delete a profile on the database, argument is event from button click
    deleteProfile(state, action) {
      const gitHub = action.payload;
      console.log(action.payload);
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          gitHub: action.payload.e.target.id
        })
      };

      fetch('/bios/', requestOptions)
        .then(response => response.json())
        // .then(() => this.toggleBio())
        .catch(err => console.log('ERROR: Unable to delete profile', err));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfiles.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        console.log('ACTION', action);
        console.log('ACTION payload', action.payload);
        state.bios = action.payload;
      });
  }

  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchProfiles.fulfilled, (state, action) => {
  //       state.status = 'fulfilled';
  //       console.log('ACTION', action);
  //       state.bios = action.payload;
  //     });
  // }
});

export const { toggleCreate, toggleBio, postProfile, getProfiles, deleteProfile } = slice.actions;

export default slice.reducer;

export const fetchProfiles = createAsyncThunk(
  'slice/fetchProfiles', 
  async () => {
    const endpoint = '/bios/';
    // if (action.payload?.length) endpoint = `/search/${action.payload}`;

    const response = await fetch(endpoint);

    return response.json();
  }
);