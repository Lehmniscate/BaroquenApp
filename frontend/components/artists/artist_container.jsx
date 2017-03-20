import {connect} from 'react-redux';
import Artist from './artist';
import {fetchArtist} from '../../actions/music_actions';
import {AlbumsByArtist} from '../../reducers/selectors';

const mapStateToProps = ({music}, {params}) => ({
  albums: AlbumsByArtist(music, params.artistId),
  artist: music.artists[params.artistId]
});

const mapDispatchToProps = (dispatch, {params}) => ({
  fetchArtist: () => dispatch(fetchArtist(params.artistId))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Artist);
