import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { persistStore } from 'redux-persist';

//import logger from 'redux-logger'

import { reducers } from './root/rootReducer';
import rootSaga from './root/rootSaga';

// Actions
import { startApp } from './root/rootActions';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers(history),
    compose(
        applyMiddleware(
            //logger,
            routerMiddleware(history),
            sagaMiddleware,            
        ),
    ),
);

persistStore(
    store,
    null,
    () => {
        store.dispatch(startApp());
    }
);

sagaMiddleware.run(rootSaga);

export default store;