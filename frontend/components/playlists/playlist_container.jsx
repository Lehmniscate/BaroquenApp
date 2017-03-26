import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import Playlist from './playlist';
import {
  fetchPlaylist, 
  deletePlaylist, 
  updatePlaylist
} from '../../actions/music_actions';
import {SongsByPlaylist} from '../../reducers/selectors';
import {receiveSong} from '../../actions/player_actions';

const mapStateToProps = ({music}, {params}) => ({
  songs: SongsByPlaylist(music, params.playlistId),
  playlist: music.playlists[params.playlistId],
  artists: music.artists,
  albums: music.albums
});

const mapDispatchToProps = (dispatch, {params}) => ({
  fetchPlaylist: () => dispatch(fetchPlaylist(params.playlistId)),
  receiveSong: (playlist, song) => dispatch(receiveSong(
    `/playlist/${params.playlistId}`,
    playlist,
    song)),
  deletePlaylist: (playlist) => dispatch(deletePlaylist(playlist)).then(() => hashHistory.push("/")),
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Playlist);
