import { combineReducers } from 'redux';

import dataReducer from './data.reducer';
import gameReducer from './game.reducer';

const reducers = combineReducers({
  data: dataReducer,
  game: gameReducer
});

export default reducers;
