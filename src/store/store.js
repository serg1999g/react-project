import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from 'store/rootReducer';
import appConfig from 'constants/appConfig';

const middlewares = [thunk];

export const history = createBrowserHistory();

/**
 * Start logger only on dev environment
 */
if (appConfig.isDev) {
  middlewares.push(logger);
}

const store = createStore(
  createRootReducer(history),
  {},
    composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      ...middlewares,
    ),
  ),
);

if (module.hot) {
  module.hot.accept('./rootReducer', () => {
    const createRootReducerHot = require('./rootReducer').default;
    store.replaceReducer(createRootReducerHot(history));
  });
}

export default store;
