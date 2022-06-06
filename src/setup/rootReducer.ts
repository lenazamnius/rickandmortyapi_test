import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import characterReducer from '../redux/character/reducer';
import characterListReducer from '../redux/characterList/reducer';
import uiReducer from '../redux/ui/reducer';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    ui: uiReducer,
    characterList: characterListReducer,
    character: characterReducer,
  });
export default createRootReducer;
