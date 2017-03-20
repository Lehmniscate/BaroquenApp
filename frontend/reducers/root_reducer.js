import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import MusicReducer from './music_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  music: MusicReducer
});

export default RootReducer;
