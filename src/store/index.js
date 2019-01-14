import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from '../api';
import reducers from '../reducers';

const store = createStore(
  reducers,
  applyMiddleware(thunk.withExtraArgument(api))
);

export default store;
