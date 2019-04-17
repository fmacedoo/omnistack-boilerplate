import { call, all, takeEvery, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

// Actions Types
import * as alertActionTypes from './alertActionTypes';

// Actions
import * as navigation from '../navigation/navigationActions';

export function* alertError(action) {
    const { errors } = action;
    
    // It means it's an internal exception and must be rethrow
    if (errors.message || typeof(errors) === 'string') {
        if (errors === 'Unauthorized') {
            yield put(navigation.navigateTo('Login'));
            return;
        }
        
        throw errors;
    }
    else
        yield call(Alert.alert, 'Error', errors.join(/\n/));
}

export default function* root() {
    yield all([
        takeEvery(alertActionTypes.HANDLE_ERROR, alertError),
    ]);
}
