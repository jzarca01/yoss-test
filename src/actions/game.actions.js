import { START_GAME } from '../types';

export const startGame = nbPlayers => dispatch =>
  dispatch({
    type: START_GAME,
    payload: {
      nbPlayers: nbPlayers
    }
  });
