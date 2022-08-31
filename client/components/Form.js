import React from 'react';
import { Modal, Box, Typography, FormGroup, TextField, Button, Chip, Paper, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { Delete as DeleteIcon } from '@mui/icons-material';

class Form extends React.Component {
  render() {
    return (
      <Dialog
        open={ this.props.show }
        onClose={ this.props.showModal }
        scroll="paper"
      >
        <DialogTitle id="scroll-dialog-title">Create Codesmith Profile</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <TextField id="full-name" label="Full Name" variant="outlined" />
          {/* <TextField id="preferred-name" label="Preferred Name" variant="outlined" /> */}
          <TextField id="github" label="GitHub" variant="outlined" />
          {/* <TextField id="expertize" label="Can be a resource for:" variant="outlined" /> */}
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={ this.props.toggleDialog } 
            endIcon={ <DeleteIcon/> }
          >
            Cancel
          </Button>
          <Button 
            onClick={ this.props.postProfile } 
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

