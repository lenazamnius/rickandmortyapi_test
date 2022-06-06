import { all, call, takeEvery } from 'redux-saga/effects';
import { Types } from '../types';
import { getCharacter } from './workers';

export function* watchGetCharacter() {
  yield takeEvery(Types.GET_CHARACTER, getCharacter);
}

export function* watchCharacter() {
  yield all([call(watchGetCharacter)]);
}
