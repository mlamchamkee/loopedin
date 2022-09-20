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
        const gitHub = action.payload;
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
    
    // submits a DELETE request to delete a profile on the database, argument is event from button click
    deleteProfile(state, action) {
      const gitHub = action.payload;
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          gitHub: action.payload
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
        state.bios = action.payload;
      });
  }
});

const thunks = {
  // submits a GET request to find a profiles on the database, defaults to finding all if no arg provided
  fetchProfiles: createAsyncThunk(
    'slice/fetchProfiles', 
    async (action) => {
      let endpoint = '/bios/';
      if (action?.length) endpoint = `/search/${action}`;
      try {
        const response = await fetch(endpoint);
        return response.json();
      }
      catch (error) {
        console.log('ERROR: Unable to search skill', error);
      }
      
    }
  ),
};

export const { toggleCreate, toggleBio, postProfile, deleteProfile } = slice.actions;

export const { fetchProfiles } = thunks;

export default slice.reducer;