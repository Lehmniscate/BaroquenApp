import React from 'react';
import {Link, withRouter} from 'react-router';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if(this.props.loggedIn) this.props.router.push('/');
  }

  login(e) {
    e.preventDefault();
    this.props.login({
      username: "Guest",
      password: "password"
    });
    return false;
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign up</Link>;
    } else {
      return <Link to="/login">Log in</Link>;
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <span className="demo" onClick={this.login.bind(this)}>Demo</span>
        <Link className="signup" to="/signup"><span>Sign up Here</span></Link>
        <span>
          Already have an account? <Link to="/login">log in here</Link>
        </span>
      </div>
    );
  }
}

export default Welcome;
