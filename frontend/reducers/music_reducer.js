import {
  RECEIVE_SONGS,
  RECEIVE_ALBUMS,
  RECEIVE_ARTISTS,
  RECEIVE_PLAYLISTS,
  DELETE_PLAYLIST
} from '../actions/music_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  artists: {},
  albums: {},
  songs: {},
  playlists: {}
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
      return merge({}, state, {songs});
    case RECEIVE_PLAYLISTS:
      let playlists = {};
      action.playlists.forEach(playlist => playlists[playlist.id] = playlist);
      return merge({}, state, {playlists});
    case DELETE_PLAYLIST:
      playlists = {};
      Object.keys(state.playlists).forEach(id => {
        console.log(id, action.playlist.id);
        if(id != action.playlist.id) playlists[id] = state.playlists[id];
      });
      let newState = merge({}, state);
      newState.playlists = playlists;
      return newState;
    default:
      return state;
  }
};

export default MusicReducer;
