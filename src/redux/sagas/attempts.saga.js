import axios from "axios";
import { put, takeLatest } from '@redux-saga/core/effects';

function* attemptsSaga() {
    yield takeLatest('FETCH_CHALLENGE_ATTEMPTS', fetchChallengeAttempts);
    yield takeLatest('MAKE_ATTEMPT', makeAttempt);
    yield takeLatest('FETCH_CHALLENGE_SUCCESS', fetchChallengeSuccess);
    yield takeLatest('FETCH_USER_ATTEMPTS', fetchUserAttempts);
    yield takeLatest('DELETE_CHALLENGE_ATTEMPTS', deleteChallengeAttempts);
}

function* makeAttempt(action) {
    yield axios.post(`/api/attempts/`, action.payload);
    yield put({type: 'FETCH_CHALLENGE_ATTEMPTS'});
    yield put({type: 'FETCH_CHALLENGE_SUCCESS'});
}

function* fetchChallengeAttempts(action) {
    try {
        const response = yield axios.get(`/api/attempts/challenge-total/${action.payload}`);
        yield put({ type: 'SET_ATTEMPTS', payload: response.data });
    }
    catch (error) {

    }

}

function* fetchChallengeSuccess(action) {
    const response = yield axios.get(`api/attempts/challenge-success/${action.payload}`);
    yield put({ type: 'SET_ATTEMPT_SUCCESS', payload: response.data });
}

function* fetchUserAttempts() {

}

function* deleteChallengeAttempts() {

}

export default attemptsSaga;