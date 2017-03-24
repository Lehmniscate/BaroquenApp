import {connect} from 'react-redux';
import Browse from './browse';
import {fetchArtists, fetchPlaylists} from '../../actions/music_actions';
import {hasHistory} from 'react-router';

const mapStateToProps = ({music}) => ({
  artists: Object.keys(music.artists).map(key => music.artists[key]),
  playlists: Object.keys(music.playlists).map(key => music.playlists[key])
});

const mapDispatchToProps = (dispatch, {route}) => ({
  fetchArtists: () => dispatch(fetchArtists()),
  fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
