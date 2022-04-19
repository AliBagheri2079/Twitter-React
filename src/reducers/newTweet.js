export const newTweetReducer = (state = "", { type, payload }) => {
    switch (type) {
        case "TWEET":
            return payload;
        case "CLEAR_TWEET":
            return payload;
        default:
            return state;
    }
}