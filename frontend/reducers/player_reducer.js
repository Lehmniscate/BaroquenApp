import {
  RECEIVE_SONG,
  PLAYPAUSE,
  NEXT,
  PREVIOUS
} from '../actions/player_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  playlist_url: '/browse',
  playlist: [],
  playing: false,
  song: 0
});

const PlayerReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SONG:
      return {
        playlist_url: action.playlist_url,
        playlist: action.playlist,
        playing: true,
        song: action.song
      };
    case PLAYPAUSE:
      return merge({}, state, {playing: !state.playing});
    case NEXT:
      let newSong = state.song + 1;
      if(newSong === state.playlist.length)
        newSong = state.song;
      return merge({}, state, {song: newSong});
    case PREVIOUS:
      newSong = state.song - 1
      if(newSong === -1)
        newSong = 0;
      return merge({}, state, {song: newSong});
    default:
      return state;
  }
};

export default PlayerReducer;
