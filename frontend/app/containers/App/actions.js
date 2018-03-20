import makeActionWithPayload from 'utils/makeActionWithPayload';

import {
  CHECK_IF_AUTHORIZED,
  CHECK_IF_AUTHORIZED_ERROR,
  CHECK_IF_AUTHORIZED_SUCCESS,
} from './constants';

export const checkIfAuthorized = makeActionWithPayload(CHECK_IF_AUTHORIZED);
export const checkIfAuthorizedSuccess = makeActionWithPayload(CHECK_IF_AUTHORIZED_SUCCESS);
export const checkIfAuthorizedError = makeActionWithPayload(CHECK_IF_AUTHORIZED_ERROR);
