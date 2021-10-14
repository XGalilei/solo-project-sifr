import { put, takeEvery } from '@redux-saga/core/effects';
import axios from 'axios';

function* ciphersSaga() {
    yield takeEvery('FETCH_CIPHERS', fetchCiphers);
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

export default ciphersSaga;