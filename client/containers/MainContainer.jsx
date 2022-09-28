import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

import BioContainer from './BioContainer.jsx';
import NavBar from '../components/NavBar.jsx';
import { toggleCreate } from '../reducers/slice';

const MainContainer = (props) => {
  const dispatch = useDispatch();
  const togCreate = () => dispatch(toggleCreate());


  return(
    <div id="main-container" className="container">
      <NavBar />
      <BioContainer />
      <div id="button-container">
        <Button 
          id="dialog-button" 
          variant="contained" 
          onClick={ togCreate } 
        >
          Create Profile
        </Button>
      </div>
    </div>
  );
};


export default MainContainer;