import makeActionWithPayload from 'utils/makeActionWithPayload';

import {
  FILE_SUBMIT,
  FILE_SUBMIT_ERROR,
  FILE_SUBMIT_SUCCESS,
  FILE_UPLOAD,
  FILE_UPLOAD_ERROR,
  FILE_UPLOAD_SUCCESS,
  VALIDATE_TEXT_ERROR,
  VALIDATE_TEXT_SUCCESS,
  RESET,
} from './constants';


export const fileSubmit = makeActionWithPayload(FILE_SUBMIT);
export const fileSubmitError = makeActionWithPayload(FILE_SUBMIT_ERROR);
export const fileSubmitSuccess = makeActionWithPayload(FILE_SUBMIT_SUCCESS);

export const fileUpload = makeActionWithPayload(FILE_UPLOAD);
export const fileUploadError = makeActionWithPayload(FILE_UPLOAD_ERROR);
export const fileUploadSuccess = makeActionWithPayload(FILE_UPLOAD_SUCCESS);

export const validateTextError = makeActionWithPayload(VALIDATE_TEXT_ERROR);
export const validateTextSuccess = makeActionWithPayload(VALIDATE_TEXT_SUCCESS);

export const reset = makeActionWithPayload(RESET);

