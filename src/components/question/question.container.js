import { connect } from 'react-redux';
import QuestionComponent from './question.component';

import { answerQuestion } from '../../actions/game.actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  answerQuestion: (movieId, actorId, answer) =>
    dispatch(answerQuestion(movieId, actorId, answer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionComponent);
