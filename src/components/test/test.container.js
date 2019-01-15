import { connect } from 'react-redux';
import TestComponent from './test.component';
import { getData } from '../../actions/data.actions';

function mapStateToProps(state) {
  return {
    films: state.data.films,
    actors: state.data.actors
  };
}

const mapDispatchToProps = {
  getData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent);
