export const tweetsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "LOAD_TWEETS":
            return payload;
        default:
            return state;
    }
}