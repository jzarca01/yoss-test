import React, { Component } from 'react';

import Header from '../../components/header/header.component';
import Question from '../../components/question/question.container';

import './style.css';

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
      rounds
    } = this.props;
    const { actor, movie } = currentQuestion;
    return (
      <div className="Play">
        <Header isPlaying={isPlaying} />
        <h1>Play view</h1>
        {isPlaying && (
          <React.Fragment>
            <h2>
              Round {rounds} : {currentPlayer.name} turn
            </h2>
            <Question movie={movie} actor={actor} />
          </React.Fragment>
        )}
        {!isPlaying && <h2>Game over</h2>}
      </div>
    );
  }
}
