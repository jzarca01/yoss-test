import {
  START_GAME,
  RESULTS_EMPTY,
  RESULTS_LOADED,
  RESULTS_ERROR
} from '../types';

const initialState = {
  nbPlayers: null,
  playerTurn: null,
  isPlaying: false,
  players: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        isPlaying: true,
        nbPlayers: action.payload.nbPlayers,
        ...action.payload
      };
    case RESULTS_EMPTY:
      return {
        ...state,
        isEmpty: true,
        isLoading: false,
        isLoaded: true
      };
    case RESULTS_LOADED:
      return {
        ...state,
        isLoading: false,
        isEmpty: false,
        isLoaded: true,
        ...action.payload
      };
    case RESULTS_ERROR:
      return {
        ...state,
        isLoaded: true,
        isEmpty: false,
        isLoading: false,
        isError: true,
        ...action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;
