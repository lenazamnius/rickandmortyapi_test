import { createSelector } from 'reselect';
import { RootState } from '../../setup/typedefs';

const uiSelector = (state: RootState) => state.characterList;

export const getCharacters = createSelector(
  [uiSelector],
  (characters) => characters.data,
);

export const getNextLink = createSelector(
  [uiSelector],
  (characters) => characters.info?.next,
);
