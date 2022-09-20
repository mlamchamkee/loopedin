import React from 'react';

import { TextField } from '@mui/material';

const TextArea = (props) => {

  const { id, label} = props;
  return (
    <TextField id={ id } margin="normal" multiline rows={ 5 } fullWidth label={ label }variant="outlined" />
  );
};


export default TextArea;