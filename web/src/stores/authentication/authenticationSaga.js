import { takeLatest, put, call, all, select } from 'redux-saga/effects';

// Services
import MainService from '../../services/mainService';

// Actions
import { storeAuthentication, storeUser } from './authenticationActions';
import { handleErrors } from '../alert/alertActions';
import * as navigation from '../navigation/navigationActions';
import * as authenticationActionTypes from './authenticationActionTypes';
import { toggleLoader } from '../loader/loaderActions';

// Selectors
import * as authenticationSelectors from './authenticationSelectors';
import * as navigationSelectors from '../navigation/navigationSelectors';

function* asyncCheckAuthentication() {
    const token = yield select(authenticationSelectors.getToken);
    const pathname = yield select(navigationSelectors.getLocation);
    if (pathname === '/login' && token) {
        yield put(navigation.navigateTo('/'));
    } else if (pathname !== '/login' && !token) {
        yield put(navigation.navigateTo('/login'));
    }
}

function* asyncAuthenticate(action) {
    try {
        yield put(toggleLoader(true));

        const ouvidoriaService = new MainService();

        const tokenResponse = yield call(ouvidoriaService.token, action.payload);
        yield put(storeAuthentication(tokenResponse.data));
        
        const sessionResponse = yield call(ouvidoriaService.session);
        yield put(storeUser(sessionResponse.data));

        yield put(navigation.navigateTo('/'));
    } catch (err) {
        yield put(handleErrors(err));
    } finally {
        yield put(toggleLoader(false));
    }
}

function* asyncLogoff() {
    try {
        yield put(navigation.navigateTo('/login'));
    } catch (err) {
        yield put(handleErrors(err));
    }
}

export default function* root() {
    yield all([
        takeLatest(authenticationActionTypes.CHECK_AUTHENTICATION, asyncCheckAuthentication),
        takeLatest(authenticationActionTypes.ASYNC_AUTHENTICATE, asyncAuthenticate),
        takeLatest(authenticationActionTypes.LOGOFF, asyncLogoff),
    ]);
}
