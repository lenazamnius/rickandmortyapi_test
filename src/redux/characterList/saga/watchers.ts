import { all, call, takeEvery } from 'redux-saga/effects';
import { Types } from '../types';
import {
  getCharacterList,
  getCharactersByName,
  loadMoreFiltered,
} from './workers';

export function* watchGetCharacterList() {
  yield takeEvery(Types.GET_CHARACTERS, getCharacterList);
}

export function* watchGetCharactersByName() {
  yield takeEvery(Types.GET_CHARACTERS_BY_NAME, getCharactersByName);
}

export function* watchLoadMoreFiltered() {
  yield takeEvery(Types.LOAD_MORE_FILTERED, loadMoreFiltered);
}

export function* watchCharacterList() {
  yield all([
    call(watchGetCharacterList),
    call(watchGetCharactersByName),
    call(watchLoadMoreFiltered),
  ]);
}
