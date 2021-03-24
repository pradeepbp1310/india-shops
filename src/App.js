import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Shop } from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';

export const Hats = () => {
  return <h1>Hats page</h1>
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}>
        </Route>
        <Route exact path='/shop' component={Shop}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
