import http from "./httpService";
import config from "./config.json";

export const getAllTweet = () => {
    http.defaults.headers.post["Content-Type"] = "application/json";
    http.defaults.headers.post["x-auth-token"] = localStorage.getItem("x-auth-token");

    return http.post(`${config.twitterapi}/getAllTweet`);
};

export const getAllHashTag = () => {
    http.defaults.headers.get["Content-Type"] = "application/json";
    http.defaults.headers.get["x-auth-token"] = localStorage.getItem("x-auth-token");

    return http.get(`${config.twitterapi}/getAllHashTags`);
};

export const NewTweet = (tweet) => {
    http.defaults.headers.post["Content-Type"] = "application/json";
    http.defaults.headers.post["x-auth-token"] = localStorage.getItem("x-auth-token");

    return http.post(`${config.twitterapi}/newTweet`, JSON.stringify(tweet));
};

export const likeTweet = (tweetId) => {
    http.defaults.headers.get["Content-Type"] = "application/json";
    http.defaults.headers.get["x-auth-token"] = localStorage.getItem("x-auth-token");

    return http.get(`${config.twitterapi}/likeTweet/${tweetId}`);
};