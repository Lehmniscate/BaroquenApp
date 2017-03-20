import {connect} from 'react-redux';
import Album from './album';
import {fetchAlbum} from '../../actions/music_actions';
import {SongsByAlbum} from '../../reducers/selectors';

const mapStateToProps = ({music, music: songs, music: albums}, {params}) => ({
  songs: SongsByAlbum(music, params.albumId),
  album: music.albums[params.albumId]
});

const mapDispatchToProps = (dispatch, {params}) => ({
  fetchAlbum: () => dispatch(fetchAlbum(params.albumId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
