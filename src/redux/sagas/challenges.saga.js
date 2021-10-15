import axios from "axios";
import {put, takeLatest} from '@redux-saga/core/effects';

function* challengesSaga() {
    yield takeLatest('FETCH_CHALLENGES', fetchChallenges);
}

function* fetchChallenges() {
    try {
        const response = yield axios.get('/api/challenges');
        yield put({type: 'SET_CHALLENGES', payload: response.data});
    }
    catch(error) {
        console.log('Get challenges request failed', error);
    }
}

export default challengesSaga;