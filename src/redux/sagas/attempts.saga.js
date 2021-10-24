import axios from "axios";
import { put, takeEvery } from '@redux-saga/core/effects';

function* attemptsSaga() {
    yield takeEvery('FETCH_CHALLENGE_ATTEMPTS', fetchChallengeAttempts);
    yield takeEvery('MAKE_ATTEMPT', makeAttempt);
    yield takeEvery('FETCH_CHALLENGE_SUCCESS', fetchChallengeSuccess);
    yield takeEvery('DELETE_CHALLENGE_ATTEMPTS', deleteChallengeAttempts);
}

function* makeAttempt(action) {
    yield axios.post(`/api/attempts/`, action.payload);
    yield put({type: 'FETCH_CHALLENGE_ATTEMPTS'});
    yield put({type: 'FETCH_CHALLENGE_SUCCESS'});
}

function* fetchChallengeAttempts() {
    try {
        const response = yield axios.get(`/api/attempts/total/`);
        yield put({ type: 'SET_ATTEMPTS', payload: response.data });
    }
    catch (error) {
        console.error('Error in getting challenge attempts', error);
    }

}

function* fetchChallengeSuccess() {
    const response = yield axios.get(`api/attempts/success/`);
    yield put({ type: 'SET_ATTEMPT_SUCCESS', payload: response.data });
}

function* deleteChallengeAttempts(action) {
    try {
        yield axios.delete(`api/attempts/${action.payload.id}`);
    }
    catch(error) {
        console.log('Error in deleting attempts from challenge', error);
    }

}

export default attemptsSaga;