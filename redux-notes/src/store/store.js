import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootModule from '../modules/rootModule';

// const thunk = ({ dispatch, getState }) => next => action =>
//   typeof action === 'function' ? action(dispatch, getState) : next(action);
const logger = createLogger();
const middleWare = applyMiddleware(logger, thunk);
const enhancer = composeWithDevTools(middleWare);

const store = createStore(rootModule, enhancer);

export default store;
