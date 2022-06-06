import { createSelector } from 'reselect';
import { RootState } from '../../setup/typedefs';

const uiSelector = (state: RootState) => state.character;

export const getCharacter = createSelector(
  [uiSelector],
  (character) => character.data,
);
