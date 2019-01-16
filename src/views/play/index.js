import { connect } from 'react-redux';
import PlayComponent from './play.component';
import { startGame } from '../../actions/game.actions';

const mapStateToProps = state => ({
  isPlaying: state.game.isPlaying,
  nbPlayers: state.game.nbPlayers,
  currentPlayer: state.game.currentPlayer,
  currentQuestion: state.game.currentQuestion,
  rounds: state.game.rounds,
  players: state.game.players
});

const mapDispatchToProps = dispatch => ({
  startGame: nbPlayers => dispatch(startGame(nbPlayers))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayComponent);
