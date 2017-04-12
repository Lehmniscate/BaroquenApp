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

  let img = new Image();
  let page = document.getElementsByClassName('login-page')[0];
  if(page) {
    let enhancedClass = 'bg-image-enhanced';
    let bigSrc = "https://s3.amazonaws.com/baroquen-dev/PipeOrgan.jpg";
    img.addEventListener('load', () => {
      page.style.background = `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9) ), url("https://s3.amazonaws.com/baroquen-dev/PipeOrgan.jpg")`;
      page.style.backgroundSize = 'cover';
      page.style.backgroundPosition = 'center center';
    });

    img.src = bigSrc;
  }
});
