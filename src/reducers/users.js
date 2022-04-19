export const usersReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "SET_USERS":
            return payload;
        case "CLEAR_USERS":
            return payload;
        default:
            return state;
    }
}