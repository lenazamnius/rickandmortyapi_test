import { createSelector } from 'reselect';
import { RootState } from '../../setup/typedefs';

const uiSelector = (state: RootState) => state.ui;

export const getIsFetching = createSelector(
  [uiSelector],
  (ui) => ui.isFetching,
);
