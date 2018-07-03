import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../redux/reducers';
import rootSaga from '../redux/saga';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
