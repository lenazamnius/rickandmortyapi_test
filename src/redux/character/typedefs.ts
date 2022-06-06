import { ICharacter } from '../characterList/typedefs';
import { Types } from './types';

export type CharacterState = {
  data: ICharacter | null;
};

export namespace Actions {
  export type GetCharacterAction = {
    type: Types.GET_CHARACTER;
    payload: string;
  };
  export type FillCharacterAction = {
    type: Types.FILL_CHARACTER;
    payload: ICharacter | null;
  };
}

export type CharacterActions =
  | Actions.GetCharacterAction
  | Actions.FillCharacterAction;
