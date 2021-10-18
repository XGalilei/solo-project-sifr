import axios from "axios";
import {put, takeLatest} from '@redux-saga/core/effects';

function* challengesSaga() {
    yield takeLatest('FETCH_CHALLENGES', fetchChallenges);
    yield takeLatest('FETCH_A_CHALLENGE', fetchSingleChallenge);
    yield takeLatest('ADD_CHALLENGE', addChallenge);
    yield takeLatest('FETCH_ATTEMPTED_CHALLENGES', fetchAttemptedChallenges);
    yield takeLatest('FETCH_CREATED_CHALLENGES', fetchCreatedChallenges);
    yield takeLatest('EDIT_CHALLENGE', editChallenge);
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

function* fetchAttemptedChallenges(action) {
    try {
        
    }
    catch(error) {

    }
}

function* editChallenge(action) {
    try {
        yield axios.put(`/api/challenges/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_CHALLENGES'});
        yield put({type: 'FETCH_A_CHALLENGE', payload: action.payload.id});
    }
    catch(error) {
        console.log('Error in editing challenge:', error);
    }
}

function* fetchCreatedChallenges() {
    try {
    const response = yield axios.get('api/challenges/user-created');
    yield put({type: 'SET_CHALLENGES', payload: response.data});
    }
    catch(error) {
        console.log('Error in getting user-created challenges:', error);
    }
}

function* fetchSingleChallenge(action) {
    try {
        const response = yield axios.get(`api/challenges/${action.payload.id}`);
        yield put({type: 'SET_SINGLE_CHALLENGE', payload: response.data});
    }
    catch(error) {
        console.log('Error in getting single challenge', error);
    }
}

export default challengesSaga;