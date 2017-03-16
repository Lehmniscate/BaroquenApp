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
    const user = this.state;
    this.props.processForm({user});
    return false;
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">
            <label> Username:
              <input type="text"
                      value={this.state.username}
                      onChange={this.update("username")}
                      className="login-input" />
            </label>
            <label> Email:
              <input type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                      className="login-input" />
            </label>
            <label> Password:
              <input type="password"
                      value={this.state.password}
                      onChange={this.update("password")}
                      className="login-input" />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
