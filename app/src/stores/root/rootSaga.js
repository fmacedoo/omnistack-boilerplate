import { all } from 'redux-saga/effects';
import alertSaga from '../alert/alertSaga';
import authenticationSaga from '../authentication/authenticationSaga';

export default function* rootSaga() {
  yield all([
    alertSaga(),
    authenticationSaga(),
  ])
}