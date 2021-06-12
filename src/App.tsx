import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';

function App() {
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
            <Route exact path="/products">
              <ProductListPage />
            </Route>
            <Route exact path="/cart">
              <CartPage />
            </Route>
            <Route exact path="/account">
              <AccountPage />
            </Route>
            <Redirect from="/" to="/products" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
