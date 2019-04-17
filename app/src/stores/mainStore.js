import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import { reducers } from './root/rootReducer';
import rootSaga from './root/rootSaga';

import { navigatorMiddleware } from '../containers/Navigator';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(navigatorMiddleware, sagaMiddleware));

persistStore(
    store,
    null,
    () => {
        store.getState()
    }
);

sagaMiddleware.run(rootSaga);

export default store;