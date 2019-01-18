import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';

import rootModule from '../modules/rootModule';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, rootModule);

const logger = createLogger();
const middleWare = applyMiddleware(logger, thunk);
const enhancer = composeWithDevTools(middleWare);

// const store = createStore(rootModule, enhancer);

export const store = createStore(pReducer, enhancer);
export const persistor = persistStore(store);
