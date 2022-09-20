import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Dialog, DialogTitle, DialogActions, DialogContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import MainCard from './MainCard.jsx';
import BaseCard from './BaseCard.jsx';

import { toggleBio, deleteProfile, getProfiles } from '../reducers/slice';

const BioDialog = (props) => {
  const dispatch = useDispatch();
  const showBio = useSelector((state) => state.slice.showBio);
  const bio = useSelector((state) => state.slice.selectedBio);
  const togBio = () => dispatch(toggleBio());
  const delBio = (e) => {
    dispatch(deleteProfile(e.target.id));
    dispatch(toggleBio());
    dispatch(getProfiles());
  };

  if (bio) {
    return (
      <Dialog
        open={ showBio }
        scroll="body"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="scroll-dialog-title">LoopedIn Profile</DialogTitle>
        <DialogContent dividers={scroll === 'body'}>
          <MainCard id="main" margin="normal" bio= { bio }/>
          <BaseCard id="skills"  question="What topics are you a good resource for?" answer={ bio.skills }/>
          <BaseCard id="home" question="Where do you consider yourself from?" answer={ bio.home }/>
          <BaseCard id="preCodesmith"  question="What were you doing before Codesmith?" answer={ bio.preCodesmith } />
          <BaseCard id="goals"  question="What do you want to do with your coding skills?" answer={ bio.goals } />
          <BaseCard id="hobbies"  question="What are your passions and hobbies?" answer={ bio.hobbies } />
          <BaseCard id="funFact"  question="What is a fun or random fact about yourself?" answer={ bio.funFact } />
        </DialogContent>
        <DialogActions>
          <Button 
            id={ bio.gitHub }
            onClick={ delBio } 
            endIcon={ <DeleteIcon/> }
          >
            Delete
          </Button>
          <Button 
            onClick={ togBio } 
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
};

export default BioDialog;
