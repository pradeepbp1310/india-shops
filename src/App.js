import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';

export const Hats = () => {
  return <h1>Hats page</h1>
}
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}>
        </Route>
        <Route exact path='/shop' component={ShopPage}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
