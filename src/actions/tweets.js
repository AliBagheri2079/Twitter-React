import { getAllTweet, likeTweet } from "../services/tweetService";
import { handleNewTweet } from './newTweet';

export const loadTweets = () => {
    return async dispatch => {
        const { data, status } = await getAllTweet();
        if (status === 200) await dispatch({ type: "LOAD_TWEETS", payload: data });
    }
}

export const handleLikeTweet = (id) => {
    return async dispatch => {
        const { status } = await likeTweet(id);
        if (status === 200) await dispatch(loadTweets());
    }
}

export const handleRetweet = (event, id) => {
    return async (dispatch, getState) => {
        const [newRetweet] = getState().tweets.filter(tweet => tweet._id === id);
        await dispatch(handleNewTweet(event, newRetweet.text));
    }
}