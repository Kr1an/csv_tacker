/*
 *
 * FileSubmitionForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FILE_SUBMIT,
  FILE_SUBMIT_ERROR,
  FILE_SUBMIT_SUCCESS,
  FILE_UPLOAD,
  FILE_UPLOAD_ERROR,
  FILE_UPLOAD_SUCCESS,
  VALIDATE_TEXT_ERROR,
  VALIDATE_TEXT_SUCCESS,
  LOAD_ALL_POSTS_SUCCESS,
  RESET,
} from './constants';

const initialState = fromJS({
  meta: {
    loading: null,
    error: null,
  },
  data: {
    uploadedText: null,
    isTextValid: null,
    allPosts: null,
  },
});

const fileSubmitCases = (state, action) => ({
  [FILE_SUBMIT]: () => state
    .setIn(['meta', 'loading'], true)
    .setIn(['meta', 'error'], null),
  [FILE_SUBMIT_ERROR]: () => state
    .setIn(['meta', 'error'], action.payload)
    .setIn(['meta', 'loading'], false),
  [FILE_SUBMIT_SUCCESS]: () => state
    .setIn(['meta', 'loading'], false)
    .setIn(['meta', 'error'], null),
});

const fileUpdateCases = (state, action) => ({
  [FILE_UPLOAD]: () => state
    .setIn(['meta', 'loading'], true)
    .setIn(['meta', 'error'], null)
    .setIn(['data', 'uploadedText'], null)
    .setIn(['data', 'isTextValid'], false),
  [FILE_UPLOAD_ERROR]: () => state
    .setIn(['meta', 'loading'], false)
    .setIn(['meta', 'error'], action.payload)
    .setIn(['data', 'uploadedText'], null)
    .setIn(['data', 'isTextValid'], false),
  [FILE_UPLOAD_SUCCESS]: () => state
    .setIn(['meta', 'loading'], false)
    .setIn(['meta', 'error'], null)
    .setIn(['data', 'uploadedText'], action.payload)
    .setIn(['data', 'isTextValid'], true),
});

const validateTextCases = (state, action) => ({
  [VALIDATE_TEXT_ERROR]: () => state
    .setIn(['meta', 'error'], action.payload)
    .setIn(['data', 'isTextValid'], false),
  [VALIDATE_TEXT_SUCCESS]: () => state
    .setIn(['meta', 'error'], null)
    .setIn(['data', 'isTextValid'], true)
    .setIn(['data', 'uploadedText'], action.payload),
});

const resetCases = (state) => ({
  [RESET]: () => state
    .setIn(['meta', 'error'], null)
    .setIn(['meta', 'loading'], null)
    .setIn(['data', 'uploadedText'], null)
    .setIn(['data', 'isTextValid'], null)
    .setIn(['data', 'allPosts'], null),
});

const allPosts = (state, action) => ({
  [LOAD_ALL_POSTS_SUCCESS]: () => state
    .setIn(['data', 'allPosts'], action.payload),
});

const fileSubmitionFormReducer = (state = initialState, action) => {
  const cases = {
    ...fileSubmitCases(state, action),
    ...fileUpdateCases(state, action),
    ...validateTextCases(state, action),
    ...resetCases(state, action),
    ...allPosts(state, action),
    default: () => state,
  };
  return (cases[action.type] || cases.default)();
};

export default fileSubmitionFormReducer;
