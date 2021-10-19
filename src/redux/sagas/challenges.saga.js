import axios from "axios";
import {put, takeEvery} from '@redux-saga/core/effects';

function* challengesSaga() {
    yield takeEvery('FETCH_CHALLENGES', fetchChallenges);
    yield takeEvery('FETCH_A_CHALLENGE', fetchSingleChallenge);
    yield takeEvery('ADD_CHALLENGE', addChallenge);
    yield takeEvery('FETCH_ATTEMPTED_CHALLENGES', fetchAttemptedChallenges);
    yield takeEvery('FETCH_CREATED_CHALLENGES', fetchCreatedChallenges);
    yield takeEvery('EDIT_CHALLENGE', editChallenge);
    //yield takeEvery('DELETE_CHALLENGE', deleteChallenge);
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
        const id = action.payload.id;
        yield axios.put(`/api/challenges/${id}`, action.payload);
        yield put({type: 'FETCH_CHALLENGES'});
        yield put({type: 'FETCH_A_CHALLENGE', payload: {id: id}});
    }
    catch(error) {
        console.log('Error in editing challenge:', error);
    }
}

function* fetchCreatedChallenges(action) {
    try {
    const response = yield axios.get(`api/challenges/user-created/${action.payload.id}`);
    yield put({type: 'SET_USER_CHALLENGES', payload: response.data});
    }
    catch(error) {
        console.log('Error in getting user-created challenges:', error);
    }
}

function* fetchSingleChallenge(action) {
    try {
        const response = yield axios.get(`api/challenges/single/${action.payload.id}`);
        yield put({type: 'SET_SINGLE_CHALLENGE', payload: response.data});
    }
    catch(error) {
        console.log('Error in getting single challenge', error);
    }
}

//function* deleteChallenge(action) {
//    try {
//
//    }
//    catch(error) {
//
//    }
//}

export default challengesSaga;