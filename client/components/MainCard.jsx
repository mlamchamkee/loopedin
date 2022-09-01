import React from 'react';

import { Avatar, Box, Card, CardContent, Link, Paper, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

class MainCard
  extends React.Component {

  render() {
    const { bio } = this.props;

    return (
      <div className="main-card-container">
        <Card sx={{ height: 150, display: 'flex'}}>
          <CardContent sx={{ maxWidth: 600 }}>
            {/* <Box> */}
            <Avatar 
              alt={ bio.gitHub }
              src={ `build/assets/${bio.gitHub}.jpg` }
              sx={ { width: 120, height: 120 } } 
            />
            <span id="span-card">
              <Typography gutterBottom variant="h4">
                {bio.preferredName}
              </Typography>
              <Typography gutterBottom variant="body3" color="text.secondary">
                {bio.fullName}
              </Typography>
              <Link href={`http://www.github.com/${bio.gitHub}`} rel="noreferrer" color="inherit">
                <div className="github-container">
                  <GitHubIcon/>
                  <span style={{marginLeft: '5px'}}>{bio.gitHub}</span>
                </div>
              </Link>
            </span>
            {/* </Box> */}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default MainCard;

