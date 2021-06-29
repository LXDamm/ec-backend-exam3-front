import { configureStore } from '@reduxjs/toolkit';
import Account from '../types/account';
import Cart from '../types/cart';
import accountReducer from './accountSlice';
import authReducer from './authSlice';
import cartReducer from './cartSlice';

export interface AppState {
  account: Account;
  loggedIn: boolean;
  cart: Cart;
}

const store = configureStore({
  reducer: {
    account: accountReducer,
    auth: authReducer,
    cart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;