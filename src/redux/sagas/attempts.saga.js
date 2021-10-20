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

//function* fetchUserAttempts() {
//
//}

//function* deleteChallengeAttempts() {
//
//}

export default attemptsSaga;