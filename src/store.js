import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV === 'production'
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(thunk)
)(createStore)

const store = createStoreWithMiddleware(rootReducer)

export default store