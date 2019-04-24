import { all, takeEvery, put } from 'redux-saga/effects';

// Actions Types
import * as alertActionTypes from './alertActionTypes';

// Actions
import * as navigation from '../navigation/navigationActions';
import * as alert from '../alert/alertActions';

export function* handleErrors(action) {
    const { errors } = action;

    // It means it's an internal service exception and must be rethrow
    if (errors.message || typeof(errors) === 'string') {
        if (errors === 'Unauthorized') {
            yield put(navigation.navigateTo('/login'));
            return;
        }
        
        return console.log('handleErrors:Unauthorized', errors);
    }

    if (errors instanceof Error) {
        return console.log('handleErrors:Error', errors);
    }

    yield put(alert.openAlert(errors));
}

export default function* root() {
    yield all([
        takeEvery(alertActionTypes.HANDLE_ERRORS, handleErrors),
    ]);
}
