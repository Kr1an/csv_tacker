import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import request from 'utils/request';

import csvjson from 'csvjson';
import isInvalidText from 'utils/attackProtector';

import {
  FILE_UPLOAD_SUCCESS,
  FILE_SUBMIT,
} from './constants';

import {
  validateTextError,
  validateTextSuccess,
} from './actions';

export function* onUploadedTextSuccessSaga(action) {
  const text = action.payload;
  if (isInvalidText(text)) {
    yield put(validateTextError('File Content is not valid'));
  }
  try {
    const options = {
      delimiter: ',',
      quote: '"',
    };
    const obj = csvjson.toObject(text, options)
      .map((x) => ({
        ...x,
        tax_name: x['tax name'],
        tax_amount: x['tax amount'],
        pre_tax_amount: x['pre-tax amount'],
        expense_description: x['expense description'],
        name: x['employee name'],
        address: x['employee address'],
        date: '2018-03-20',
      }));
    yield put(validateTextSuccess(JSON.stringify(obj)));
  } catch (e) {
    yield put(validateTextError('File Content is not valid'));
  }
}

export function* fileSubmitSaga(action) {
  const url = `${process.env.API_BASE}/api/v1/employees/`;
  const token = localStorage.getItem('token');
  const body = JSON.stringify({ employees: JSON.parse(action.payload) });
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body,
  };
  try {
    yield call(request, url, options);
    yield put(push('/success'));
  } catch (e) {
    yield put(push('/success'));
  }
}

export default function* fileSubmitionFormSage() {
  yield [
    takeLatest(FILE_UPLOAD_SUCCESS, onUploadedTextSuccessSaga),
    takeLatest(FILE_SUBMIT, fileSubmitSaga),
  ];
}
