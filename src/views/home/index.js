import { connect } from 'react-redux';
import HomeComponent from './home.component';
import { getData } from '../../actions/data.actions';

const mapStateToProps = state => ({
  isLoaded: state.data.isLoaded,
  isError: state.data.isError
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
