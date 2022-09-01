import React from 'react';

import { TextField } from '@mui/material';

class TextArea extends React.Component {
  render() {
    const { id, label} = this.props;
    return (
      <TextField id={ id } margin="normal" multiline rows={ 5 } fullWidth label={ label }variant="outlined" />
    );
  }
}

export default TextArea;