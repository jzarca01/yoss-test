import { connect } from 'react-redux';
import PlayComponent from './play.component';
import { startGame } from '../../actions/game.actions';

function mapStateToProps(state) {
  return {
    isPlaying: state.game.isPlaying,
    nbPlayers: state.game.nbPlayers
  };
}

const mapDispatchToProps = dispatch => ({
  startGame: nbPlayers => dispatch(startGame(nbPlayers))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayComponent);
