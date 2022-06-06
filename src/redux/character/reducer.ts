import { CharacterActions, CharacterState } from './typedefs';
import { Types } from './types';

export const initialState: CharacterState = {
  data: null,
};

export const characterReducer = (
  state = initialState,
  action: CharacterActions,
) => {
  switch (action.type) {
    case Types.FILL_CHARACTER:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default characterReducer;
