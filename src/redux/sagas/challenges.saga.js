import axios from "axios";
import {put, takeLatest} from '@redux-saga/core/effects';

function* challengesSaga() {
    yield takeLatest('FETCH_CHALLENGES', fetchChallenges);
    yield takeLatest('ADD_CHALLENGE', fetchChallenges);
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

function* addChallenge(action) {
    try {
        yield axios.post('/api/challenges', action.payload);
        yield put({type: 'FETCH_CHALLENGES'});
    }
    catch(error) {
        console.error('Error in adding a challenge:', error);
    }
}

export default challengesSaga;