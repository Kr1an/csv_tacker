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
  LOAD_ALL_POSTS,
  LOAD_ALL_POSTS_ERROR,
  LOAD_ALL_POSTS_SUCCESS,
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

export const loadAllPosts = makeActionWithPayload(LOAD_ALL_POSTS);
export const loadAllPostsError = makeActionWithPayload(LOAD_ALL_POSTS_ERROR);
export const loadAllPostsSuccess = makeActionWithPayload(LOAD_ALL_POSTS_SUCCESS);
