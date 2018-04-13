import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import Navigation from '~/containers/Navigation/Navigation';
import * as reducers from '~/redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const appReducer = combineReducers(reducers);

function rootReducer(state, action) {
  return appReducer(state, action);
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    devToolsEnhancer(),
  ),
);

const persistor = persistStore(store);

// persistor.purge();

export default function PUBGCorrent() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
