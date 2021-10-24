import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects';

function* feedbackSaga() {
    yield takeLatest('POST_FEEDBACK', postFeedback);  
}

function* postFeedback(action) {
    try{
        yield axios.post('/api/feedback', {text: action.payload.text});
        yield put({type: 'SET_FEEDBACK', payload: 'complete'});
    }
    catch(error) {
        console.error('Error in posting feedback:', error);
        //alert('Attempt failed');
    }
}

export default feedbackSaga;