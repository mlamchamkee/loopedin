import React from 'react';

import { Card, CardContent, Typography } from '@mui/material';

class BaseCard
  extends React.Component {

  render() {
    const { question, answer } = this.props;

    return (
      <Card sx={{ minWidth: 400 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {question}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary">
            {answer}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default BaseCard;

