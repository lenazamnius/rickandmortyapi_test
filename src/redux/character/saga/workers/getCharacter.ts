import { apply, call, put } from 'redux-saga/effects';
import { API_URL } from '../../../../App';
import { Api } from '../../../../REST/api';
import { ICharacter } from '../../../characterList/typedefs';
import { uiActions } from '../../../ui/actions';
import { characterActions } from '../../actions';
import { Actions } from '../../typedefs';

export function* getCharacter({ payload }: Actions.GetCharacterAction) {
  try {
    yield put(uiActions.startFetching());

    const response: Response = yield apply(Api, Api.get, [
      `${API_URL}/${payload}`,
    ]);

    if (response.status !== 200) {
      const { error }: { error: string } = yield call([response, 'json']);

      throw new Error(error);
    }

    const data: ICharacter = yield call([response, 'json']);

    yield put(characterActions.fillCharacter(data));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(uiActions.stopFetching());
  }
}
