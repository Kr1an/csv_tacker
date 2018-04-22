import { call, put, takeLatest } from 'redux-saga/effects';
import { showMessage, reset as resetNotificationSystem } from 'containers/NotificationSystem/actions';
import request from 'utils/request';
import { push } from 'react-router-redux';
import { SIGN_UP } from './constants';


export function* signUpSubmitSaga(action) {
  const user = action.payload;
  const url = `${process.env.API_BASE}/api/auth/register`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  try {
    const result = yield call(request, url, options);
    const token = result.token;
    localStorage.setItem('token', token);
    yield put(resetNotificationSystem());
    yield put(push('/submit'));
  } catch (e) {
    yield put(showMessage('Unable to sign up with provided credentials'));
  }
}

export default function* signUpDefaultSaga() {
  yield [
    takeLatest(SIGN_UP, signUpSubmitSaga),
  ];
}
