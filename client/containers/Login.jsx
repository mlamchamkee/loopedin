import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';

const LoginPage = (props) => {

  const show = useSelector((state) => !state.slice.userVerified);

  const githubAuth = () => {
    window.open('/auth/github', '_self');
  };
    
  if (show) return (
    <div>
      <NavBar/>,
      <Box
        display = 'flex'
        marginTop = '20%'
        paddingBottom= '22%'
        justifyContent = 'center'
      >
        <Button className='login-button' onClick={githubAuth}>
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo"/>
          Login with Github
        </Button>
      </Box>
    </div>

  );
};

export default LoginPage;
