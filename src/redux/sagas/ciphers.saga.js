import { put, takeEvery } from '@redux-saga/core/effects';
import axios from 'axios';

function* ciphersSaga() {
    yield takeEvery('FETCH_CIPHERS', fetchCiphers);
    yield takeEvery('FETCH_SINGLE_CIPHER', fetchSingleCipher);
}

function* fetchCiphers() {
    try {
        const response = yield axios.get('/api/cipher');

        yield put({type: 'SET_CIPHERS', payload: response.data})
    }
    catch(error) {
        console.log('Get ciphers request failed', error);
    }
}

function* fetchSingleCipher(action) {
    try {
        const cipher = action.payload;
        const response = yield axios.get(`/api/cipher/${cipher}`);
        yield put({type: 'SET_CIPHER', payload: response.data});
    }
    catch(error) {
        console.log('Get cipher request failed', error);
    }
}

export default ciphersSaga;