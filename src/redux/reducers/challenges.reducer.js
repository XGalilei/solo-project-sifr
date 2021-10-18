import { combineReducers } from "redux";

const challenges = (state = [], action) => {
    switch(action.type) {
        case 'SET_CHALLENGES':
            return action.payload;
        default:
            return state;
    }
};

const singleChallenge = (state = {}, action) => {
    switch(action.type) {
        case 'SET_SINGLE_CHALLENGE':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    challenges,
    singleChallenge
});