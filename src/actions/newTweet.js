import { NewTweet } from './../services/tweetService';
import { infoMessage } from '../utils/toast';
import { loadTweets } from './tweets';
import { loadHashtags } from './hashTags';

export const handleNewTweet = (event, text) => {
    return async dispatch => {
        event.preventDefault();
        const { status } = await NewTweet({ text });

        if (status === 200) {
            infoMessage("Tweet created successfuly");
            await dispatch({ type: "CLEAR_TWEET", payload: "" });
            await dispatch(loadTweets());
            await dispatch(loadHashtags());
        }
    }
}