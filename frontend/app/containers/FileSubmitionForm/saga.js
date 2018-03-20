import { takeLatest, put } from 'redux-saga/effects';

import { push } from 'react-router-redux';

import isInvalidText from 'utils/attackProtector';

import {
  FILE_UPLOAD_SUCCESS,
  FILE_SUBMIT,
} from './constants';

import {
  validateTextError,
  validateTextSuccess,
  fileSubmitError,
  fileSubmitSuccess,
  reset,
} from './actions';

export function* onUploadedTextSuccessSaga(action) {
  const text = action.payload;
  if (isInvalidText(text)) {
    yield put(validateTextError('File Content is not valid'));
  } else {
    yield put(validateTextSuccess());
  }
}

export function* fileSubmitSaga() {
  try {
    yield put(fileSubmitSuccess());
    yield put(reset());
    yield put(push('/success'));
  } catch (e) {
    yield put(fileSubmitError());
  }
}

export default function* fileSubmitionFormSage() {
  yield [
    takeLatest(FILE_UPLOAD_SUCCESS, onUploadedTextSuccessSaga),
    takeLatest(FILE_SUBMIT, fileSubmitSaga),
  ];
}
