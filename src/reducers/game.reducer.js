import { START_GAME, CORRECT_ANSWER, WRONG_ANSWER } from '../types';

const initialState = {
  nbPlayers: null,
  playerTurn: null,
  isPlaying: false,
  players: [],
  rounds: 0,
  currentQuestion: {}
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        ...action.payload,
        isPlaying: true,
        currentPlayer: action.payload.players[0]
      };
    case CORRECT_ANSWER:
      return {
        ...state,
        ...action.payload
      };
    case WRONG_ANSWER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default gameReducer;
