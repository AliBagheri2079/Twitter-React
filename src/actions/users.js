import { allUsersData } from "../services/userService";

export const loadUsers = userName => {
    return async (dispatch) => {
        const { data, status } = await allUsersData();

        if (status === 200) {
            const filteredUser = data.filter((data) =>
                data.username.includes(userName)
            );
            await dispatch({ type: "SET_USERS", payload: filteredUser })
        }
    }
}

export const clearUsers = () => {
    return async dispatch => {
        await dispatch({ type: "CLEAR_USERS", payload: [] })
    }
}

