import {
  RECEIVE_SONG,
  PLAY,
  PAUSE,
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
    case PLAY:
      return merge({}, state, {playing: true});
    case PAUSE:
      return merge({}, state, {playing: false});
    case NEXT:
      return merge({}, state, {song: state.song + 1});
    case PREVIOUS:
      return merge({}, state, {song: state.song - 1});
    default:
      return state;
  }
};

export default PlayerReducer;
