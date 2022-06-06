import { all, call, takeEvery } from 'redux-saga/effects';
import { Types } from '../types';
import { getCharacterList } from './workers';

export function* watchGetCharacterList() {
  yield takeEvery(Types.GET_CHARACTERS, getCharacterList);
}

export function* watchCharacterList() {
  yield all([call(watchGetCharacterList)]);
}
