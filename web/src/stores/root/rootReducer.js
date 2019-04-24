import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { connectRouter } from 'connected-react-router'

// Nested reducers
import { loaderReducer } from '../loader/loaderReducer';
import { sidebarReducer } from '../sidebar/sidebarReducer';
import { alertReducer } from '../alert/alertReducer';
import { authenticationReducer } from '../authentication/authenticationReducer';

// Root action types
import { START_APP } from './rootActionTypes';

const config = {
    key: 'primary',
    blacklist: ['root', 'router'],
    storage
};

const rootReducer = (state = { isStarted: false }, { type }) => {
    switch (type) {
        case START_APP:
            return { ...state, isStarted: true }
        default:
            return state
    }
}


export const reducers = (history) => persistCombineReducers(config, {
    root: rootReducer,
    loader: loaderReducer,
    router: connectRouter(history),
    sidebar: sidebarReducer,
    dialogs: alertReducer,
    authentication: authenticationReducer,
});
