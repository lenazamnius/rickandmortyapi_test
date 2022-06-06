import { Types } from './types';

export type CharacterListState = {
  data: ICharacter[];
  info: IGetCharactersInfo | undefined;
};

export interface ICharacter {
  created: string;
  episode: string[];
  gender: 'Male' | 'Female';
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface IGetCharactersInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IGetCharactersResponse {
  info: IGetCharactersInfo;
  results: ICharacter[];
}

export namespace Actions {
  export type GetCharactersAction = {
    type: Types.GET_CHARACTERS;
    payload: string;
  };
  export type FillCharactersAction = {
    type: Types.FILL_CHARACTERS;
    payload: IGetCharactersResponse;
  };
}

export type CharacterListActions =
  | Actions.FillCharactersAction
  | Actions.GetCharactersAction;
