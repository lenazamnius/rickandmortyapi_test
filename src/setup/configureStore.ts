import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, PreloadedState } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './rootReducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

export default function configureStore(preloadedState: PreloadedState<any>) {
  const reducer = createRootReducer(history);
  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history)),
    ),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
