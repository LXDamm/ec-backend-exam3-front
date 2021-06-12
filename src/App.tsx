import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './App.css';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="page">
          <Switch>
            <Route exact path="/products/:id">
              <ProductPage />
            </Route>
            <Route exact path="/products">
              <ProductListPage />
            </Route>
            <Redirect from="/" to="/products" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
