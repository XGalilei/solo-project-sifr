const attemptsReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_ATTEMPTS':
            return action.payload;
        default:
            return state;
    }
}

export default attemptsReducer;