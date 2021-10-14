const ciphersReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_CIPHERS':
            return action.payload;
        default:
            return state;
    }
};

export default ciphersReducer;