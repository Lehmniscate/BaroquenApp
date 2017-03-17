import {connect} from 'react-redux';
import HomePage from './home_page';
import {logout} from '../actions/session_actions';
import {hashHistory} from 'react-router';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, {route}) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
