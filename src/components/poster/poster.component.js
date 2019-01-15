import React from 'react';
import { Container } from 'nes-react';

const Poster = ({ posterUrl, actorName }) => (
  <Container title={`Does ${actorName} play in this movie ?`}>
    <img src={posterUrl} alt="poster" />
  </Container>
);

export default Poster;
