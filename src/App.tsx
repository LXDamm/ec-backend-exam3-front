import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import AccountLoginPage from './pages/AccountLoginPage';
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import { setAccount } from './redux/accountSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { AppState } from './redux/store';
import Account from './types/account';

function App() {
  const dispatch = useAppDispatch();
  const account = useAppSelector((state: AppState) => {
    return state.account;
  });
  const [sessionAccount, setSessionAccount] = useState<Account>();
  useEffect(() => {
    if (!account) {
      const accountExistInSession = JSON.parse(sessionStorage.getItem('sinus_account')!);
      if (accountExistInSession) {
        dispatch(setAccount(accountExistInSession));
        setSessionAccount(accountExistInSession);
      }
    }
  }, [account, dispatch]);
  return (
    <div className="App">
      <Router>
        <Banner />
        <NavBar />
        <div className="page">
          <Switch>
            <Route exact path="/products/product/:id">
              <ProductPage />
            </Route>
            <Route exact path="/products/category/:category">
              <ProductListPage />
            </Route>
            <Route exact path="/products">
              <ProductListPage />
            </Route>
            <Route exact path="/cart">
              <CartPage />
            </Route>
            <Route exact path="/account">
              <AccountPage />
            </Route>
            <Route exact path="/login">
              <AccountLoginPage />
            </Route>
            <Redirect from="/" to="/products" />
            {(account || sessionAccount) ?
              <Redirect from="/login" to="/account" />
              :
              <>
                <Redirect from="/account" to="/login" />
                <Redirect from="/cart" to="/login" />
              </>
            }
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
