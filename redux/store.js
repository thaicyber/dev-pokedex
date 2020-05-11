/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- external ---------------------- */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
/* ---------------------- internal ---------------------- */
import rootReducer from '@/redux/root.reducer';
import rootSaga from '@/redux/root.sagas';

/* ------------------------------------------------------ */
/*                          Store                         */
/* ------------------------------------------------------ */
// middleware helper
const bindMiddleware = (middlewares) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middlewares));
  }
  return applyMiddleware(...middlewares);
};

// store creator
const initializeStore = (preloadedState = {}) => {
  // bind middleware
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = bindMiddleware([sagaMiddleware]);
  // mount middleware
  const store = createStore(rootReducer, preloadedState, middlewares);
  // run saga
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
export default initializeStore;
