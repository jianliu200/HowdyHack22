const recListReducer = (state = [], action) => {
    switch (action.type) {
        case "REC_LIST":
            return action.payload;
        default:
            return state;
    }
};

export default recListReducer;
