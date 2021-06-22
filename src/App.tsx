import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import AccountLoginPage from './pages/AccountLoginPage';
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import { useAppSelector } from './redux/hooks';
import { AppState } from './redux/store';

function App() {
  const account = useAppSelector((state: AppState) => {
    return state.account;
  });
  return (
    <div className="App">
      <Router>
        <Banner />
        <NavBar />
        <div className="page">
          <Switch>
            <Route exact path="/products/:id">
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
            {account ?
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
