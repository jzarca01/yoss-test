import React from 'react';
import { Container } from 'nes-react';

import './style.css';

const ScoresComponent = ({ players }) => (
  <div className="Scores">
    <h1>Game over</h1>
    <Container title="Scores">
      {players.map((player, index) => (
        <div key={index}>
          {player.name} : {player.score} pts
        </div>
      ))}
    </Container>
  </div>
);

export default ScoresComponent;
