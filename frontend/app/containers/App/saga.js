import { put } from 'redux-saga/effects';

import { push } from 'react-router-redux';

import {
  // CHECK_IF_AUTHORIZED,
} from './constants';

import {
  // checkIfAuthorizedSuccess,
  checkIfAuthorizedError,
} from './actions';

export function* checkIfUserAuthorizedSaga() {
  try {
    // const user = {};
    throw new Error();
    // yield put(checkIfAuthorizedSuccess(user));
  } catch (e) {
    yield put(checkIfAuthorizedError());
    yield put(push('/login'));
  }
}

export default function* appSaga() {
  yield checkIfUserAuthorizedSaga();
}
