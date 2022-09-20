import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/slice';

export const store = configureStore({
  reducer: {
    slice: reducer, 
  },
});