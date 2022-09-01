import React from 'react';

import { TextField, Button, Dialog, DialogTitle, DialogActions, DialogContent } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { Close as CloseIcon } from '@mui/icons-material';

import TextArea from './TextArea.jsx';

class Form extends React.Component {

  render() {
    const { show, showModal, toggleDialog, postProfile } = this.props;

    return (
      <Dialog
        open={ show }
        onClose={ showModal }
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
            onClick={ toggleDialog } 
            endIcon={ <CloseIcon/> }
          >
            Cancel
          </Button>
          <Button 
            onClick={ postProfile } 
            endIcon={ <SendIcon/> }
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default Form;

