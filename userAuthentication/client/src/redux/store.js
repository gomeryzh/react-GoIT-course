import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionReducer from './sessionReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token']
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
  cart: (state = []) => state
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const middleware = [thunk];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);
