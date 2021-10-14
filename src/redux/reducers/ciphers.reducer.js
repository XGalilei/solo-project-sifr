import { combineReducers } from "redux";

const allCiphers = (state = [], action) => {
    switch(action.type) {
        case 'SET_CIPHERS':
            return action.payload;
        default:
            return state;
    }
};

const singleCipher = (state = {}, action) => {
    switch(action.type) {
        case 'SET_CIPHER':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
   allCiphers,
   singleCipher 
});