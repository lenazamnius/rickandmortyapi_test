import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import uiReducer from '../bus/ui/reducer';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    ui: uiReducer,
  });
export default createRootReducer;
