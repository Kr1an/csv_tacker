import makeActionWithPayload from 'utils/makeActionWithPayload';

import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from './constants';

export const login = makeActionWithPayload(LOGIN);
export const loginError = makeActionWithPayload(LOGIN_ERROR);
export const loginSuccess = makeActionWithPayload(LOGIN_SUCCESS);
