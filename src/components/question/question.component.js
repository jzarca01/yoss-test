import React from 'react';
import { Button } from 'nes-react';

import Poster from '../poster/poster.component';

import './style.css';

export default class QuestionComponent extends React.Component {
  onClickButton(movieId, actorId, answer) {
    const { answerQuestion } = this.props;
    answerQuestion(movieId, actorId, answer);
  }

  render() {
    const { movie, actor } = this.props;

    return (
      <div className="Question">
        {movie && actor && (
          <Poster
            posterUrl={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
            actorName={actor.name}
          />
        )}
        <div className="answers">
          <Button
            success
            onClick={() => this.onClickButton(movie.id, actor.id, true)}
          >
            Yes
          </Button>
          <Button
            error
            onClick={() => this.onClickButton(movie.id, actor.id, false)}
          >
            No
          </Button>
        </div>
      </div>
    );
  }
}
