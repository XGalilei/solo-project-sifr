import { combineReducers } from "redux";

const allAttempts = (state = [], action) => {
    switch(action.type) {
        case 'SET_ATTEMPTS':
            return action.payload;
        default:
            return state;
    }
}

const successes = (state = [], action) => {
    switch(action.type) {
        case 'SET_ATTEMPT_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    allAttempts,
    successes
});