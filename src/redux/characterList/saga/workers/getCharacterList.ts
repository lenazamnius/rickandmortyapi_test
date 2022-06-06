import { apply, call, put } from 'redux-saga/effects';
import { Api } from '../../../../REST/api';
import { uiActions } from '../../../ui/actions';
import { characterListActions } from '../../actions';
import { Actions, IGetCharactersResponse } from '../../typedefs';

export function* getCharacterList({ payload }: Actions.GetCharactersAction) {
  try {
    yield put(uiActions.startFetching());
    const response: Response = yield apply(Api, Api.get, [payload]);

    if (response.status !== 200) {
      const { error }: { error: string } = yield call([response, 'json']);

      throw new Error(error);
    }

    const data: IGetCharactersResponse = yield call([response, 'json']);

    yield put(characterListActions.fillCharacters(data));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(uiActions.stopFetching());
  }
}
