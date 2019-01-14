import React, { Component } from 'react';

export default class TestComponent extends Component {
  componentDidMount() {
    const { createTest } = this.props;
    createTest();
    console.log(this.props);
  }
  render() {
    const { films, actors } = this.props;
    return (
      <div style={style.container}>
        <div className="films">
          {!!films.length &&
            films.map((result, index) => <div key={index}>{result.title}</div>)}
        </div>
        <div className="actors">
          {!!actors.length &&
            actors.map((result, index) => <div key={index}>{result.name}</div>)}
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    flex:1,
    flexDirection: 'row'
  }
};
