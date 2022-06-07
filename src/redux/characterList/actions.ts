import { IGetCharactersResponse } from './typedefs';
import { Types } from './types';

export const characterListActions = {
  getCharacters: (link: string) => {
    return {
      type: Types.GET_CHARACTERS,
      payload: link,
    };
  },
  fillCharacters: (data: IGetCharactersResponse) => {
    return {
      type: Types.FILL_CHARACTERS,
      payload: data,
    };
  },
  getCharactersByName: (name: string) => {
    return {
      type: Types.GET_CHARACTERS_BY_NAME,
      payload: name,
    };
  },
  fillFilteredCharacters: (data: IGetCharactersResponse) => {
    return {
      type: Types.FILL_FILTERED_CHARACTERS,
      payload: data,
    };
  },
  loadMoreFiltered: (nextLink: string) => {
    return {
      type: Types.LOAD_MORE_FILTERED,
      payload: nextLink,
    };
  },
  fillMoreFiltered: (data: IGetCharactersResponse) => {
    return {
      type: Types.FILL_MORE_FILTERED,
      payload: data,
    };
  },
  clearFiltered: () => {
    return {
      type: Types.CLEAR_FILTERED,
    };
  },
  isLoadingMore: (isLoading: boolean) => {
    return {
      type: Types.IS_LOADING_MORE,
      payload: isLoading,
    };
  },
};
