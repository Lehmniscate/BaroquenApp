import {connect} from 'react-redux';
import Player from './player';
import {nextSong, previousSong, receiveSong } from '../../actions/player_actions';

const mapStateToProps = ({player}) => ({
  playlist_url: player.playlist_url,
  playlist: player.playlist,
  song: player.song
});

const mapDispatchToProps = dispatch => ({
  nextSong: () => dispatch(nextSong()),
  previousSong: () => dispatch(previousSong()),
  receiveSong: (url, playlist, song) => dispatch(receiveSong(url, playlist, song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
