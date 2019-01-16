import { START_GAME, CORRECT_ANSWER, WRONG_ANSWER } from '../types';

const getRandomQuestion = (movies, actors) => {
  const randomActor = actors[Date.now() % actors.length];
  const randomMovie = movies[Date.now() % movies.length];
  return {
    actor: randomActor,
    movie: randomMovie
  };
};

const createPlayer = index => ({
  index: index,
  name: `Player ${index + 1}`,
  score: 0,
  isStillPlaying: true
});

const setPlayers = nbPlayers => {
  const players = [];
  for (let i = 0; i < nbPlayers; i++) {
    players.push(createPlayer(i));
  }
  return players;
};

const incrementScore = (array, playerId) =>
  array.map((item, index) => {
    if (index === playerId) {
      return { ...item, score: item.score + 1 };
    }
    return item;
  });

const eliminatePlayer = (array, playerId) =>
  array.map((item, index) => {
    if (index === playerId) {
      return { ...item, isStillPlaying: false };
    }

    return item;
  });

export const startGame = nbPlayers => (dispatch, getState) => {
  return dispatch({
    type: START_GAME,
    payload: {
      rounds: 1,
      nbPlayers: nbPlayers,
      players: setPlayers(nbPlayers),
      currentQuestion: getRandomQuestion(
        getState().data.films,
        getState().data.actors
      )
    }
  });
};

export const answerQuestion = (movieId, actorId, answer) => (
  dispatch,
  getState
) => {
  function onCorrectAnswer() {
    const players = game.players.filter(player => player.isStillPlaying);
    dispatch({
      type: CORRECT_ANSWER,
      payload: {
        players: incrementScore(game.players, game.currentPlayer.index),
        currentPlayer: players[game.rounds % players.length],
        currentQuestion: getRandomQuestion(data.films, data.actors),
        rounds: game.rounds + 1
      }
    });
  }
  function onWrongAnswer() {
    const newStateofPlayers = eliminatePlayer(
      game.players,
      game.currentPlayer.index
    );
    const players = newStateofPlayers.filter(player => player.isStillPlaying);
    const isStillPlaying = players.length;
    dispatch({
      type: WRONG_ANSWER,
      payload: {
        players: newStateofPlayers,
        isPlaying: isStillPlaying,
        currentPlayer: isStillPlaying
          ? players[game.rounds % isStillPlaying]
          : game.currentPlayer,
        rounds: isStillPlaying ? game.rounds + 1 : game.rounds,
        currentQuestion: isStillPlaying
          ? getRandomQuestion(data.films, data.actors)
          : game.currentQuestion
      }
    });
  }
  const { game, data } = getState();
  const currentPlayer = game.currentPlayer;
  const currentActor = data.actors.find(actor => actor.id === actorId);
  const isMovieWithThisActor = currentActor.known_for.find(
    movie => movie.id === movieId
  );

  if (
    (isMovieWithThisActor !== undefined && answer) ||
    (isMovieWithThisActor === undefined && !answer)
  ) {
    return onCorrectAnswer();
  }
  return onWrongAnswer();
};
