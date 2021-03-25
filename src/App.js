import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeAuth = null;

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}>
          </Route>
          <Route exact path='/shop' component={ShopPage}>
          </Route>
          <Route path='/sign-in' component={SignInAndSignUpPage}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
