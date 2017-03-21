import {connect} from 'react-redux';
import Player from './player';
import {nextSong,
  previousSong,
  receiveSong,
  receivePlayPause
} from '../../actions/player_actions';

const mapStateToProps = ({player, music}) => ({
  playlist_url: player.playlist_url,
  playlist: player.playlist,
  song: player.song,
  playing: player.playing,
  songs: music.songs,
  albums: music.albums
});

const mapDispatchToProps = dispatch => ({
  nextSong: () => dispatch(nextSong()),
  previousSong: () => dispatch(previousSong()),
  receiveSong: (url, playlist, song) => dispatch(receiveSong(url, playlist, song)),
  receivePlayPause: () => dispatch(receivePlayPause())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
