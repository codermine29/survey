import React, { Component } from 'react';
import { Signin } from './Signin';
import { Header } from './Header';
import { ThemeProvider, theme, CSSReset, ToastProvider } from '@blockstack/ui';
import { userSession } from '../auth';
import App2 from './app/App'

export default class App extends Component {
  state = {
    userData: null,
  };

  handleSignOut(e) {
    e.preventDefault();
    this.setState({ userData: null });
    userSession.signUserOut(window.location.origin);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <div className="site-wrapper">
            <div className="site-wrapper-inner">
              {!userSession.isUserSignedIn() ? <Signin /> : <App2/>}    {/*Todolist before*/}
            </div>
          </div>
        </ToastProvider>
        <CSSReset />
      </ThemeProvider>
    );
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        window.history.replaceState({}, document.title, '/');
        this.setState({ userData: userData });
      });
    } else if (userSession.isUserSignedIn()) {
      this.setState({ userData: userSession.loadUserData() });
    }
  }
}