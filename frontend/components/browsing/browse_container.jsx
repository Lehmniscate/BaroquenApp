import {connect} from 'react-redux';
import Browse from './browse';
import {fetchArtists} from '../../actions/music_actions';
import {hasHistory} from 'react-router';

const mapStateToProps = ({music}) => ({
  artists: Object.keys(music.artists).map(key => music.artists[key])
});

const mapDispatchToProps = (dispatch, {route}) => ({
  fetchArtists: () => dispatch(fetchArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
