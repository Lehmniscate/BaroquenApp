import {connect} from 'react-redux';
import HomePage from './home_page';
import {logout} from '../actions/session_actions';
import {createPlaylist} from '../actions/music_actions';
import {hashHistory} from 'react-router';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, {route}) => ({
  logout: () => dispatch(logout()),
  newPlaylist: (playlist) => dispatch(createPlaylist(playlist)).then(p => hashHistory.push(`playlist/${p.id}`))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
