import {connect} from 'react-redux';
import PlaylistSelector from './playlist_selector';

import {
  fetchPlaylists,
  fetchPlaylist,
  updatePlaylist
} from '../../actions/music_actions';

const mapStateToProps = ({session, music}) => ({
  music,
  playlists: Object.keys(music.playlists).map(id => music.playlists[id]),
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistSelector);
