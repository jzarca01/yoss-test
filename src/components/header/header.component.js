import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const HeaderComponent = ({ isPlaying }) => (
  <ul className="Header">
    {isPlaying && (
      <li>
        <Link to="/">Restart</Link>
      </li>
    )}
  </ul>
);

export default HeaderComponent;
