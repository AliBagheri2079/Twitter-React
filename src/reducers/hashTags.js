export const hashTagsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "LOAD_HASHTAGS":
            return payload;
        default:
            return state;
    }
}