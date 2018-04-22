import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import request from 'utils/request';

import isInvalidText from 'utils/attackProtector';

import {
  FILE_UPLOAD_SUCCESS,
  FILE_SUBMIT,
} from './constants';

import {
  validateTextError,
  validateTextSuccess,
  loadAllPostsSuccess,
} from './actions';

export function* onUploadedTextSuccessSaga(action) {
  const text = action.payload;
  if (isInvalidText(text)) {
    yield put(validateTextError('File Content is not valid'));
  }
  try {
    const obj = JSON.parse(text);
    yield put(validateTextSuccess(JSON.stringify(obj)));
  } catch (e) {
    yield put(validateTextError('File Content is not valid'));
  }
}

export function* fileSubmitSaga(action) {
  const url = `${process.env.API_BASE}/posts`;
  const token = localStorage.getItem('token');
  const body = JSON.stringify({ posts: JSON.parse(action.payload) });
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body,
  };
  try {
    yield call(request, url, options);
    yield put(push('/success'));
  } catch (e) {
    console.log(e);
    yield put(push('/success'));
  }
}

export function* loadAllPostsSaga(action) {
  const url = `${process.env.API_BASE}/posts`;
  const token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  };
  try {
    const result = yield call(request, url, options);
    yield put(loadAllPostsSuccess(result));
  } catch (e) {
    console.log(e);
  }
}

export default function* fileSubmitionFormSage() {
  yield [
    takeLatest(FILE_UPLOAD_SUCCESS, onUploadedTextSuccessSaga),
    takeLatest(FILE_SUBMIT, fileSubmitSaga),
  ];
  yield loadAllPostsSaga();
}
