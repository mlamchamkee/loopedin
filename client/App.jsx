import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import MainContainer from './containers/MainContainer.jsx';
import Form from './components/Form.jsx';
import BioDialog from './components/BioDialog.jsx';
import LoginPage from './containers/Login.jsx';
import { store } from './store';
import { Provider } from 'react-redux';

import { fetchProfiles } from './reducers/slice';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3da991',
      contrastText: '#fff'
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

const App = (props) => {
  const dispatch = useDispatch();
  const getBios = () => dispatch(fetchProfiles()); 
  getBios();
  
  return (
    <ThemeProvider theme={theme}>
      {/* <LoginPage/> */}
      <Provider store={store}>
        <MainContainer id="main-container" />
        <Form id="dialog" />
        <BioDialog id="dialog-bio" />
      </Provider>

    </ThemeProvider>
  );        
};

export default App;
