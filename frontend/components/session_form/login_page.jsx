import React from 'react';

const LoginPage = (props) => {
  return (
    <div className="login-page">
      <div className="form-container">
        {props.children}
      </div>
      <div className="login-information">
        <h1>Get the right music, right now</h1>
        <h2>Listen to many songs for free.</h2>
        <ul>
          <li>Search and discover music you'll love</li>
          <li>Create playlists of your favorite music</li>
          <li>Share with your friends</li>
        </ul>
      </div>
    </div>
  )
}

export default LoginPage;
