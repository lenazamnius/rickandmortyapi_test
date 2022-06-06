import { all, call } from 'redux-saga/effects';
import { watchCharacter as characterSaga } from '../redux/character/saga/watchers';
import { watchCharacterList as characterListSaga } from '../redux/characterList/saga/watchers';
import { watchUi as uiSaga } from '../redux/ui/saga/watchers';

// Watchers
export function* rootSaga() {
  yield all([call(uiSaga), call(characterListSaga), call(characterSaga)]);
}
