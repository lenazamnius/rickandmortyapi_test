import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, PreloadedState } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './rootReducer';
import { rootSaga } from './rootSaga';

export const history = createBrowserHistory();

const { NODE_ENV } = process.env;

const sagaMiddleware = createSagaMiddleware();

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
  if (NODE_ENV !== 'production') {
    // @ts-ignore
    if (module.hot) {
      // @ts-ignore
      module.hot.accept<() => void>(() => {
        store.replaceReducer(reducer);
      });
    }
  }

  return store;
}
