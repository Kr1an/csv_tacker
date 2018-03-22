import { put, call } from 'redux-saga/effects';

import { push } from 'react-router-redux';

import request from 'utils/request';

export function* checkIfUserAuthorizedSaga() {
  const token = localStorage.getItem('token');
  const url = `${process.env.API_BASE}/api/v1/`;

  if (!token) {
    yield put(push('/login'));
  }

  const options = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  try {
    yield call(request, url, options);
  } catch (e) {
    yield put(push('/login'));
  }
}

export default function* appSaga() {
  yield checkIfUserAuthorizedSaga();
}
