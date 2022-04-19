import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import { usersReducer } from './users';
import { hashTagsReducer } from './hashTags';
import { tweetsReducer } from './tweets';
import { newTweetReducer } from './newTweet';

export const reducers = combineReducers({
    users: usersReducer,
    newTweet: newTweetReducer,
    tweets: tweetsReducer,
    hashTags: hashTagsReducer,
    loadingBar: loadingBarReducer,
});