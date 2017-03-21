import React from 'react';
import {Link, withRouter} from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if(this.props.loggedIn) this.props.router.push('/');
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    return false;
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link onClick={this.props.clearErrors} to="/signup">Sign up with a new account</Link>;
    } else {
      return <Link onClick={this.props.clearErrors} to="/login">Log In with an existing account</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)}
      </ul>
    );
  }


  login(e) {
    e.preventDefault();
    this.props.login({
      username: "Guest",
      password: "password"
    });
    return false;
  }



  render() {
    let email = "";
    if(this.props.formType === 'signup') {
      email = (
        <label> Email:
          <input type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="login-input" />
        </label>
      )
    }
    return (
      <div className="login-form-container">
        <span className="demo" onClick={this.login.bind(this)}>Demo</span>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">
            <label> Username:
              <input type="text"
                      value={this.state.username}
                      onChange={this.update("username")}
                      className="login-input" />
            </label>
            {email}
            <label> Password:
              <input type="password"
                      value={this.state.password}
                      onChange={this.update("password")}
                      className="login-input" />
            </label>
            <input className="submit" type="submit" value={this.props.formType} />
          </div>
        </form>
        {this.navLink()}
      </div>
    );
  }
}

export default SessionForm;
