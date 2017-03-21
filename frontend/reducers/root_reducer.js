import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import MusicReducer from './music_reducer';
import PlayerReducer from './player_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  music: MusicReducer,
  player: PlayerReducer
});

export default RootReducer;
