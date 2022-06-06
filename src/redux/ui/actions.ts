import { Types } from './types';

export const uiActions = {
  startFetching: () => {
    return {
      type: Types.START_FETCHING,
    };
  },
  stopFetching: () => {
    return {
      type: Types.STOP_FETCHING,
    };
  },
};
