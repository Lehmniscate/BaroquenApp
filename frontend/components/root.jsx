import React from 'react';
import {Provider} from 'react-redux';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import WelcomeContainer from './session_form/welcome_container';
import LoginPage from './session_form/login_page';
import HomePageContainer from './home_page_container';

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(currentUser) replace('/');
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser) replace('/welcome');
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route component={LoginPage}>
            <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
            <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
            <Route path="/welcome" component={WelcomeContainer} onEnter={_redirectIfLoggedIn} />
          </Route>
          <IndexRoute component={HomePageContainer} onEnter={_ensureLoggedIn}>

          </IndexRoute>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
