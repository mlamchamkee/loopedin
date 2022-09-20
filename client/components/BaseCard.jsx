import React from 'react';

import { Card, CardContent, Typography } from '@mui/material';

const BaseCard = (props) => {
  const { question, answer } = props;

  return (
    <div className="card-container">
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" color="text.primary">
            {question}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            {answer}
          </Typography>
        </CardContent>
      </Card>
    </div>

  );
};


export default BaseCard;

