import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser) {
    store = configureStore({ session: { currentUser: window.currentUser } });
  } else {
    store = configureStore();
  }
  window.store = store;
  ReactDOM.render(
    <Root store={store}/>, document.getElementById('root'));
});
