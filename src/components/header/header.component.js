import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const HeaderComponent = () => (
  <ul className="Header">
    <li>
      <Link to="/">Restart</Link>
    </li>
  </ul>
);

export default HeaderComponent;
