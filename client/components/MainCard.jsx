import React from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

class MainCard
  extends React.Component {

  render() {
    const { bio } = this.props;

    return (
      <div className="card-container">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {bio.preferredName}
            </Typography>
            <Typography gutterBottom variant="body3" component="div" color="text.secondary">
              {bio.fullName}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              <div className="github-container">
                <GitHubIcon/>
                <span style={{marginLeft: '5px'}}>{bio.gitHub}</span>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default MainCard;

