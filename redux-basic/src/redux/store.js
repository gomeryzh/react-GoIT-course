import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import stepReducer from './stepReducer';

import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counterValue: counterReducer,
  step: stepReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
