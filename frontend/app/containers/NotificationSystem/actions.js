import makeActionWithPayload from 'utils/makeActionWithPayload';

import {
  RESET,
  SHOW_MESSAGE,
} from './constants';

export const reset = makeActionWithPayload(RESET);
export const showMessage = makeActionWithPayload(SHOW_MESSAGE);
