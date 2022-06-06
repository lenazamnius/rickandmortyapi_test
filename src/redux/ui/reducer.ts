import { UiActions, UiState } from './typedefs';
import { Types } from './types';

export const initialState: UiState = {
  isFetching: false,
};

export const uiReducer = (state = initialState, action: UiActions) => {
  switch (action.type) {
    case Types.START_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case Types.STOP_FETCHING:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default uiReducer;
