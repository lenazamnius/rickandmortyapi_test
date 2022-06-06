import { ICharacter } from '../characterList/typedefs';
import { Types } from './types';

export const characterActions = {
  getCharacter: (id: string) => {
    return {
      type: Types.GET_CHARACTER,
      payload: id,
    };
  },
  fillCharacter: (data: ICharacter | null) => {
    return {
      type: Types.FILL_CHARACTER,
      payload: data,
    };
  },
};
