import { all, call } from 'redux-saga/effects';
import { watchUi as uiSaga } from '../bus/ui/saga/watchers';

// Watchers
export function* rootSaga() {
  yield all([call(uiSaga)]);
}
