import React from 'react';
import { Modal, Box, Typography, FormGroup, TextField, Button, Chip, Paper, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { Delete as DeleteIcon } from '@mui/icons-material';
// import ChipInput from 'material-ui-chip-input';

class Form extends React.Component {
  render() {
    const { show, showModal, toggleDialog, postProfile } = this.props;

    return (
      <Dialog
        open={ show }
        onClose={ showModal }
        scroll="paper"
      >
        <DialogTitle id="scroll-dialog-title">Create Codesmith Profile</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <TextField id="full-name" label="Full Name" variant="outlined" />
          {/* <TextField id="preferred-name" label="Preferred Name" variant="outlined" /> */}
          <TextField id="github" label="GitHub" variant="outlined" />
          {/* <TextField id="home" multiline fullWidth label="Where do you consider yourself from?" variant="outlined" />
          <TextField id="preCodesmith" multiline fullWidth label="What were you doing before Codesmith?" variant="outlined" />
          <TextField id="goals" multiline fullWidth label="What do you want to do with your coding skills?" variant="outlined" />
          <TextField id="hobbies" multiline fullWidth label="What are your passions and hobbies?" variant="outlined" />
          <TextField id="funFact" multiline fullWidth label="What is a fun or random fact about yourself?" variant="outlined" /> */}
          {/* <ChipInput
            label="Can be a resource for:"
            defaultValue={[
              'Impostor Sybdrome',
              'React',
              'OAuth',
              'Redux'
            ]}
            fullWidth
            id="skills"
          /> */}
          <TextField id="skills" fullWidth label="Can be a resource for:" variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={ toggleDialog } 
            endIcon={ <DeleteIcon/> }
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
// }

export default Form;

