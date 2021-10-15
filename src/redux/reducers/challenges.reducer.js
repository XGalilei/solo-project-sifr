const challengesReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_CHALLENGES':
            return action.payload;
        default:
            return state;
    }
};

export default challengesReducer;