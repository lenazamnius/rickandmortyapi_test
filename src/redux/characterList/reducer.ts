import { CharacterListActions, CharacterListState } from './typedefs';
import { Types } from './types';

export const initialState: CharacterListState = {
  data: [],
  info: undefined,
};

export const characterListReducer = (
  state = initialState,
  action: CharacterListActions,
) => {
  switch (action.type) {
    case Types.FILL_CHARACTERS:
      return {
        ...state,
        data: [...state.data, ...action.payload.results],
        info: {
          ...state.info,
          ...action.payload.info,
        },
      };
    default:
      return state;
  }
};

export default characterListReducer;
