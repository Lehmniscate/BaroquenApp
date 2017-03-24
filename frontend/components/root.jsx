import React from 'react';
import {Provider} from 'react-redux';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import WelcomeContainer from './session_form/welcome_container';
import LoginPage from './session_form/login_page';
import HomePageContainer from './home_page_container';
import BrowseContainer from './browsing/browse_container';
import ArtistContainer from './artists/artist_container';
import AlbumContainer from './albums/album_container';
import PlaylistContainer from './playlists/playlist_container';

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(currentUser) replace('/home');
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser) replace('/welcome');
  }

  const _redirect = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(currentUser)
      replace('/home');
    else
      replace('/welcome');
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute onEnter={_redirect} />
          <Route component={LoginPage}>
            <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
            <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
            <Route path="/welcome" component={WelcomeContainer} onEnter={_redirectIfLoggedIn} />
          </Route>
          <Route path="/home" component={HomePageContainer} onEnter={_ensureLoggedIn}>
            <IndexRoute component={BrowseContainer} />
            <Route path="/artist/:artistId" component={ArtistContainer} />
            <Route path="/album/:albumId" component={AlbumContainer} />
            <Route path="/playlist/:playlistId" component={PlaylistContainer} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
