import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import errorMiddleware from './middlewares/errorMiddleware';
import reducers from './reducers';

const middleware = [thunk, errorMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware)),
);
