import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__COMPOSE || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
