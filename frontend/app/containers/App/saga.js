import { put, call } from 'redux-saga/effects';

import { push } from 'react-router-redux';

import request from 'utils/request';

export function* checkIfUserAuthorizedSaga() {
  const token = localStorage.getItem('token');
  const url = `${process.env.API_BASE}/api/auth/me`;

  if (!token) {
    yield put(push('/register'));
  }

  const options = {
    headers: {
      'x-access-token': token,
    },
  };

  try {
    yield call(request, url, options);
  } catch (e) {
    console.log(e);
    yield put(push('/register'));
  }
}

export default function* appSaga() {
  yield checkIfUserAuthorizedSaga();
}
