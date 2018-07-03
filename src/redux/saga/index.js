import {all, fork} from 'redux-saga/effects';

import {watchFetchScooters} from './content';

export default function *rootSaga() {
    yield all([
        fork(watchFetchScooters),
    ]);
}
