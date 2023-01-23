import { configureStore } from '@reduxjs/toolkit';
import { customerReducer } from '../features/customer/CustomerReducer';

export const store = configureStore({
  reducer: {
customer:customerReducer
  },
});
