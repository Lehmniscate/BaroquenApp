import React from 'react';

class LoginPage extends React.Component {

  componentDidMount() {
    let img = new Image();
    let page = document.getElementsByClassName('login-page')[0];
    let enhancedClass = 'bg-image-enhanced';
    let bigSrc = "https://s3.amazonaws.com/baroquen-dev/PipeOrgan.jpg";
    img.addEventListener('load', () => {
      page.style.background = `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9) ), url("https://s3.amazonaws.com/baroquen-dev/PipeOrgan.jpg")`;
      page.style.backgroundSize = 'cover';
      page.style.backgroundPosition = 'center center';
    });

    img.src = bigSrc;
  }

  render() {
    return (
      <div className="login-page">
        <div className="form-container">
        {this.props.children}
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
    );
  }
}

export default LoginPage;
