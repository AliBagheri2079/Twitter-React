import { getAllHashTag } from "../services/tweetService";

export const loadHashtags = () => {
    return async dispatch => {
        const { data, status } = await getAllHashTag();
        
        if (status === 200) {
            const filteredHashtags = data.splice(0, 10);
            await dispatch({ type: "LOAD_HASHTAGS", payload: filteredHashtags })
        }
    }
}