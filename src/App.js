import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './views/home';
import Play from './views/play';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/play" component={Play} />
    </div>
  </Router>
);

export default App;
