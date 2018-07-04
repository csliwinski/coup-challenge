import {call, put, fork, takeEvery} from 'redux-saga/effects';
import Services from '../../services';

import {
    contentActions,
} from '../actions/content';

export function *watchFetchScooters() {
    yield takeEvery(contentActions.FETCH_SCOOTERS, fetchScooters);
}

export function *fetchScooters() {
    try {
        const services = new Services();
        const scootersList = yield call(services.GetItems);
        console.log(scootersList);
    } catch(error) {
        console.log(error);
    }
}