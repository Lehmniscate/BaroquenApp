import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import Welcome from './welcome';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, {route}) => ({
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
