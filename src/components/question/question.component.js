import React from 'react';
import { Button } from 'nes-react';

import Poster from '../poster/poster.component';

import './style.css';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickButton(movieId, actorId, answer) {
    console.log(answer);
  }

  render() {
    const { movie, actor } = this.props;

    return (
      <div className="Question">
        <Poster posterUrl={movie.posterUrl} actorName={actor.name} />;
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

export default Question;
