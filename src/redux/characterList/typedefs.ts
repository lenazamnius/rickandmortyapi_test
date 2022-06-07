import { Types } from './types';

export type CharacterListState = {
  data: ICharacter[];
  info: IGetCharactersInfo | undefined;
  filtered: ICharacter[];
  filteredInfo: IGetCharactersInfo | undefined;
  isLoading: boolean;
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
  export type GetCharactersByNameAction = {
    type: Types.GET_CHARACTERS_BY_NAME;
    payload: string;
  };
  export type LoadMoreFilteredAction = {
    type: Types.LOAD_MORE_FILTERED;
    payload: string;
  };
  export type FillCharactersAction = {
    type: Types.FILL_CHARACTERS;
    payload: IGetCharactersResponse;
  };
  export type FillFilteredCharactersAction = {
    type: Types.FILL_FILTERED_CHARACTERS;
    payload: IGetCharactersResponse;
  };
  export type FillMoreFilteredAction = {
    type: Types.FILL_MORE_FILTERED;
    payload: IGetCharactersResponse;
  };
  export type ClearFilteredAction = {
    type: Types.CLEAR_FILTERED;
  };
  export type IsLoadingMoreAction = {
    type: Types.IS_LOADING_MORE;
    payload: boolean;
  };
}

export type CharacterListActions =
  | Actions.GetCharactersAction
  | Actions.GetCharactersByNameAction
  | Actions.LoadMoreFilteredAction
  | Actions.FillCharactersAction
  | Actions.FillMoreFilteredAction
  | Actions.FillFilteredCharactersAction
  | Actions.ClearFilteredAction
  | Actions.IsLoadingMoreAction;
