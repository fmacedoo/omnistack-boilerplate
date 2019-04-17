import { takeLatest, put, call, all } from 'redux-saga/effects';

// Services
import MainService from '../../services/mainService'

// Actions
import { storeAuthentication, storeUser } from './authenticationActions';
import { handleError } from '../alert/alertActions';
import * as navigation from '../navigation/navigationActions';
import * as authenticationActionTypes from './authenticationActionTypes';

function* asyncAuthenticate(action) {
    try {
        const mainService = new MainService();

        const tokenResponse = yield call(mainService.token, action.payload);
        yield put(storeAuthentication(tokenResponse.data));
        
        const sessionResponse = yield call(mainService.session);
        yield put(storeUser(sessionResponse.data));
        
        yield put(navigation.navigateTo('Messages'));
    } catch (err) {
        yield put(handleError(err));
    }
}

function* asyncLogoff(action) {
    try {
        yield put(navigation.navigateTo('Login'));
    } catch (err) {
        yield put(handleError(err));
    }
}

export default function* root() {
    yield all([
        takeLatest(authenticationActionTypes.ASYNC_AUTHENTICATE, asyncAuthenticate),
        takeLatest(authenticationActionTypes.LOGOFF, asyncLogoff),
    ]);
}
