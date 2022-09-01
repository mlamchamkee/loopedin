import React from 'react';

import { Button, Dialog, DialogTitle, DialogActions, DialogContent } from '@mui/material';

import MainCard from './MainCard.jsx';
import BaseCard from './BaseCard.jsx';

class BioDialog extends React.Component {

  render() {
    const { show, toggleBio, bio } = this.props;

    return (
      <Dialog
        open={ show }
        // onClose={ showModal }
        scroll="body"
      >
        <DialogTitle id="scroll-dialog-title">{bio.fullName}</DialogTitle>
        <DialogContent dividers={scroll === 'body'}>
          <MainCard id="main" margin="normal" />
          <BaseCard id="skills"  question="What topics are you a good resource for?" answer={ bio.skills }/>
          <BaseCard id="home" question="Where do you consider yourself from?" answer={ bio.home }/>
          <BaseCard id="preCodesmith"  question="What were you doing before Codesmith?" answer={ bio.preCodesmith } />
          <BaseCard id="goals"  question="What do you want to do with your coding skills?" answer={ bio.goals } />
          <BaseCard id="hobbies"  question="What are your passions and hobbies?" answer={ bio.hobbies } />
          <BaseCard id="funFact"  question="What is a fun or random fact about yourself?" answer={ bio.funFact } />
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={ toggleBio } 
          >
          Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default BioDialog;
