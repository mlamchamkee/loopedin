import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { store } from './store.js';
import { Provider } from 'react-redux';

import styles from './stylesheets/styles.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);