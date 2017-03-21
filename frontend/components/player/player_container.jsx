import {connect} from 'react-redux';
import Player from './player';
import {nextSong, previousSong} from '../../actions/player_actions';

const mapStateToProps = {player} => ({
  player
});

const mapDispatchToProps = dispatch => ({
  nextSong: () => dispatch(nextSong()),
  previousSong: () => dispatch(previousSong())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
