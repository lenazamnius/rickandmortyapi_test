import { CharacterListActions, CharacterListState } from './typedefs';
import { Types } from './types';

export const initialState: CharacterListState = {
  data: [],
  info: undefined,
  filtered: [],
  filteredInfo: undefined,
  isLoading: false,
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
    case Types.FILL_FILTERED_CHARACTERS:
      return {
        ...state,
        filtered: [...action.payload.results],
        filteredInfo: {
          ...action.payload.info,
        },
      };
    case Types.FILL_MORE_FILTERED:
      return {
        ...state,
        filtered: [...state.filtered, ...action.payload.results],
        filteredInfo: {
          ...state.filteredInfo,
          ...action.payload.info,
        },
      };
    case Types.CLEAR_FILTERED:
      return {
        ...state,
        filtered: [],
        filteredInfo: undefined,
      };
    case Types.IS_LOADING_MORE:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default characterListReducer;
