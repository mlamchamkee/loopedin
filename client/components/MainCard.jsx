import React from 'react';

import { Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogActions, DialogContent } from '@mui/material';

class MainCard
  extends React.Component {

  render() {
    const { bio } = this.props;

    return (
      <Card sx={{ minWidth: 400 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {bio.preferredName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {bio.fullName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {bio.gitHub}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default MainCard;

