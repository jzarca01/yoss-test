import { connect } from 'react-redux';
import TestComponent from './test.component';
import { createTest } from '../../actions/test.actions';

function mapStateToProps(state) {
  return {
    films: state.test.films,
    actors: state.test.actors
  };
}

const mapDispatchToProps = {
  createTest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent);
