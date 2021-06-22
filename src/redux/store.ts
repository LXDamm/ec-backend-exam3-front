import { configureStore } from '@reduxjs/toolkit';
import Account from '../types/account';
import accountReducer from './accountSlice';

export interface AppState {
  account: Account;
}

const store = configureStore({
  reducer: {
    account: accountReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;