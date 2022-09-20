import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TextField, Button, Dialog, DialogTitle, DialogActions, DialogContent } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

import TextArea from './TextArea.jsx';

import { toggleCreate, postProfile, fetchProfiles } from '../reducers/slice';


const Form = (props) => {
  const dispatch = useDispatch();
  const showCreate = useSelector((state) => state.slice.showCreate);
  const togCreate = () => dispatch(toggleCreate());
  const getBios = async () => await dispatch(fetchProfiles());
  const postBio = async () => {
    await dispatch(postProfile());
    await dispatch(toggleCreate());
    await dispatch(fetchProfiles());
  };

  return (
    <Dialog
      open={ showCreate }
      onClose={ getBios }
      scroll="body"
    >
      <DialogTitle id="scroll-dialog-title">Create Codesmith Profile</DialogTitle>
      <DialogContent dividers={scroll === 'body'}>
        <TextField id="full-name" label="Full Name" margin="normal" />
        <TextField id="preferred-name" label="Preferred Name" margin="normal" />
        <TextField id="github" label="GitHub" margin="normal" />
        <TextField id="skills" fullWidth label="What topics are you a good resource for?" margin="normal" />
        <TextArea id="home" label="Where do you consider yourself from?" />
        <TextArea id="preCodesmith"  label="What were you doing before Codesmith?" />
        <TextArea id="goals"  label="What do you want to do with your coding skills?"  />
        <TextArea id="hobbies"  label="What are your passions and hobbies?"  />
        <TextArea id="funFact"  label="What is a fun or random fact about yourself?"  />
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={ togCreate }
          endIcon={ <CloseIcon/> }
        >
            Cancel
        </Button>
        <Button 
          onClick={ postBio }
          endIcon={ <SendIcon/> }
        >
            Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Form;

