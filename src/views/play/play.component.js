import React, { Component } from 'react';

import Header from '../../components/header/header.component';
import './style.css';
import Question from '../../components/question/question.component';

const QuestionExample = {
  actor: {
    name: 'Will Smith'
  },
  movie: {
    posterUrl: 'https://source.unsplash.com/random/300x400'
  }
};

export default class PlayComponent extends Component {
  componentDidMount() {
    const { location, startGame } = this.props;
    const { nbPlayers } = location.state;
    startGame(nbPlayers);
  }

  render() {
    const { location, isPlaying } = this.props;

    return (
      <div className="Play">
        <Header isPlaying={isPlaying} />
        <h1>Play view</h1>
        {JSON.stringify(location)}
        <Question movie={QuestionExample.movie} actor={QuestionExample.actor} />
      </div>
    );
  }
}
