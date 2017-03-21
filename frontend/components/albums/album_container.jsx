import {connect} from 'react-redux';
import Album from './album';
import {fetchAlbum} from '../../actions/music_actions';
import {SongsByAlbum} from '../../reducers/selectors';
import {receiveSong} from '../../actions/player_actions';

const mapStateToProps = ({music, music: songs, music: albums}, {params}) => ({
  songs: SongsByAlbum(music, params.albumId),
  album: music.albums[params.albumId],
  artists: music.artists
});

const mapDispatchToProps = (dispatch, {params}) => ({
  fetchAlbum: () => dispatch(fetchAlbum(params.albumId)),
  receiveSong: (playlist, song) => dispatch(receiveSong(
      `/album/${params.albumId}`,
      playlist,
      song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
