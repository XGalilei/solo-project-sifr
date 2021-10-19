import axios from "axios";
import { put, takeEvery } from '@redux-saga/core/effects';

function* attemptsSaga() {
    yield takeEvery('FETCH_CHALLENGE_ATTEMPTS', fetchChallengeAttempts);
    yield takeEvery('MAKE_ATTEMPT', makeAttempt);
    yield takeEvery('FETCH_CHALLENGE_SUCCESS', fetchChallengeSuccess);
    //yield takeEvery('FETCH_USER_ATTEMPTS', fetchUserAttempts);
    //yield takeEvery('DELETE_CHALLENGE_ATTEMPTS', deleteChallengeAttempts);
}

function* makeAttempt(action) {
    yield axios.post(`/api/attempts/`, action.payload);
    yield put({type: 'FETCH_CHALLENGE_ATTEMPTS', payload: {id: action.payload.challenge}});
    yield put({type: 'FETCH_CHALLENGE_SUCCESS', payload: {id: action.payload.challenge}});
}

function* fetchChallengeAttempts(action) {
    try {
        const response = yield axios.get(`/api/attempts/total/${action.payload.id}`);
        yield put({ type: 'SET_ATTEMPTS', payload: response.data });
    }
    catch (error) {

    }

}

function* fetchChallengeSuccess(action) {
    const response = yield axios.get(`api/attempts/success/${action.payload.id}`);
    yield put({ type: 'SET_ATTEMPT_SUCCESS', payload: response.data });
}

//function* fetchUserAttempts() {
//
//}

//function* deleteChallengeAttempts() {
//
//}

export default attemptsSaga;