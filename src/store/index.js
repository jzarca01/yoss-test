import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import api from '../api';
import reducers from '../reducers';

const DEV_TOOLS =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    DEV_TOOLS
  )
);

export default store;
