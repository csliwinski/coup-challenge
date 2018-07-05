import {call, put, fork, takeEvery} from 'redux-saga/effects';
import Services from '../../services';

import {
    contentActions,
    loadScooters,
    fetchScootersFaild,
    fetchScootersFaildServices,
} from '../actions/content';

export function *watchFetchScooters() {
    yield takeEvery(contentActions.FETCH_SCOOTERS, fetchScooters);
}

export function *fetchScooters() {
    try {
        const services = new Services();
        const request = yield call(services.GetItems);

        if (request.status === 200) {
            const scootersList = request.data.data.scooters;
            yield put(loadScooters(scootersList));
        } else {
            yield put(fetchScootersFaildServices());
        }
    } catch(error) {
        console.log(error);
        yield put(fetchScootersFaild());
    }
}