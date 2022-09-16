import React from 'react';

import { Avatar, Box, Card, CardContent, CardMedia, Link, Paper, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const MainCard = (props) => {
  const { bio } = props;

  return (
    <div className="main-card-container">
      <Card sx={{ display: 'flex' }}>
        <Box  sx={{ display: 'flex', alignItems: 'center', justifyContents: 'center', marginLeft: '10px' }}>
          <Avatar 
            alt={ bio.gitHub }
            src={ `build/assets/${bio.gitHub}.jpg` }
            sx={ { width: 120, height: 120 } }
          >
            <img src="build/assets/305.jpg" />
          </Avatar>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
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
          </CardContent>
        </Box>

      </Card>
    </div>
  );
};


export default MainCard;

