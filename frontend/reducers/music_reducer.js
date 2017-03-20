import {
  RECEIVE_SONGS,
  RECEIVE_ALBUMS,
  RECEIVE_ARTISTS,
} from '../actions/music_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  artists: {},
  albums: {},
  songs: {}
});

const MusicReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ARTISTS:
      const artists = {};
      action.artists.forEach(artist => artists[artist.id] = artist);
      return merge({}, state, {artists});
    case RECEIVE_ALBUMS:
      const albums = {};
      action.albums.forEach(album => albums[album.id] = album);
      return merge({}, state, {albums});
    case RECEIVE_SONGS:
      const songs = {};
      action.songs.forEach(song => songs[song.id] = song);
      return merge({}, {artists: state.artists}, {albums: state.albums}, {songs});
    default:
      return state;
  }
};

export default MusicReducer;
