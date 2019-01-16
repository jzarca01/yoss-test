import React, { Component } from 'react';
import { Sprite, Balloon } from 'nes-react';
import { Link } from 'react-router-dom';

import './style.css';

export default class HomeComponent extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { isLoaded, isError } = this.props;

    return (
      <div className="Home">
        <h1>Welcome</h1>
        {isLoaded &&
          !isError && (
            <div className="players">
              <div style={{ display: 'flex' }}>
                <Sprite sprite="octocat" style={{ alignSelf: 'flex-end' }} />
                <Balloon style={{ margin: '2rem', maxWidth: '400px' }} fromLeft>
                  <Link
                    to={{
                      pathname: '/play',
                      state: { nbPlayers: 1 }
                    }}
                  >
                    1-Player Game
                  </Link>
                </Balloon>
              </div>
              <div style={{ display: 'flex' }}>
                <Balloon
                  style={{ margin: '2rem', maxWidth: '400px' }}
                  fromRight
                >
                  <Link
                    disabled
                    to={{
                      pathname: '/play',
                      state: { nbPlayers: 2 }
                    }}
                  >
                    2-Player Game
                  </Link>
                </Balloon>
                <Sprite sprite="octocat" style={{ alignSelf: 'flex-end' }} />
              </div>
            </div>
          )}
      </div>
    );
  }
}
