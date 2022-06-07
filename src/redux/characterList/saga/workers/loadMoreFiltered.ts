import { apply, call, put } from 'redux-saga/effects';
import { Api } from '../../../../REST/api';
import { characterListActions } from '../../actions';
import { Actions, IGetCharactersResponse } from '../../typedefs';

export function* loadMoreFiltered({ payload }: Actions.LoadMoreFilteredAction) {
  try {
    yield put(characterListActions.isLoadingMore(true));

    const response: Response = yield apply(Api, Api.get, [payload]);

    if (response.status !== 200) {
      const { error }: { error: string } = yield call([response, 'json']);

      throw new Error(error);
    }

    const data: IGetCharactersResponse = yield call([response, 'json']);

    yield put(characterListActions.fillMoreFiltered(data));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(characterListActions.isLoadingMore(false));
  }
}
