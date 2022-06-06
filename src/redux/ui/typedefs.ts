import { Types } from './types';

export type UiState = {
  isFetching: boolean;
};

export namespace Actions {
  export type StartFetchingAction = {
    type: Types.START_FETCHING;
  };
  export type StopFetchingAction = {
    type: Types.STOP_FETCHING;
  };
}

export type UiActions =
  | Actions.StartFetchingAction
  | Actions.StopFetchingAction;
