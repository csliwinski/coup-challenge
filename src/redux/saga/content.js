import {call, put, fork, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {
    contentActions,
} from '../actions/content';

export function *watchFetchScooters() {
    yield takeEvery(contentActions.FETCH_SCOOTERS, fetchScooters);
}

export function *fetchScooters() {
    try {
        const scootersList = yield call(
            axios.get('https://qc05n0gp78.execute-api.eu-central-1.amazonaws.com/prod/scooters', {
                responseType: 'json',
            })
        );
        console.log(scootersList);
    } catch(error) {
        console.log(error);
    }
}
