import React, { Component } from 'react';

import Header from '../../components/header/header.component';
import Question from '../../components/question/question.container';

import './style.css';
import ScoresComponent from '../../components/scores/scores.component';

export default class PlayComponent extends Component {
  componentDidMount() {
    const { location, startGame } = this.props;
    const { nbPlayers } = location.state;
    startGame(nbPlayers);
  }

  render() {
    const {
      isPlaying,
      currentQuestion,
      currentPlayer,
      rounds,
      players
    } = this.props;
    const { actor, movie } = currentQuestion;
    return (
      <div className="Play">
        <Header />
        <h1>Round {rounds}</h1>
        {!!isPlaying && (
          <React.Fragment>
            <h2>{currentPlayer.name} turn</h2>
            <Question movie={movie} actor={actor} />
          </React.Fragment>
        )}
        {!isPlaying && rounds > 0 && <ScoresComponent players={players} />}
      </div>
    );
  }
}
