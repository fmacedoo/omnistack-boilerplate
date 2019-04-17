import { combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { navigationReducer } from '../navigation/navigationReducer';
import { authenticationReducer } from '../authentication/authenticationReducers';

const config = {
    key: 'primary',
    storage
};

export const reducers = persistCombineReducers(config, {
    authentication: authenticationReducer,
    navigation: navigationReducer,
});
