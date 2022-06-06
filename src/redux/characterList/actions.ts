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
};
