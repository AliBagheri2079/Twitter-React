import http from "./httpService";
import config from "./config.json";

export const registerUser = (user) => {
    http.defaults.headers.post["Content-Type"] = "application/json";

    return http.post(`${config.twitterapi}/register`, JSON.stringify(user));
};

export const loginUser = (user) => {
    http.defaults.headers.post["Content-Type"] = "application/json";

    return http.post(`${config.twitterapi}/login`, JSON.stringify(user));
};

export const allUsersData = () => {
    http.defaults.headers.get["Content-Type"] = "application/json";
    http.defaults.headers.get["x-auth-token"] = localStorage.getItem("x-auth-token");

    return http.get(`${config.twitterapi}/getAllUser`);
};

export const getUserTweet = (userInfo) => {
    http.defaults.headers.post["Content-Type"] = "application/json";
    http.defaults.headers.post["x-auth-token"] = localStorage.getItem("x-auth-token");

    return http.post(`${config.twitterapi}/getAllTweet`, JSON.stringify(userInfo));
};

export const getTokenUserProfile = () => {
    http.defaults.headers.get["Content-Type"] = "application/json";
    http.defaults.headers.get["x-auth-token"] = localStorage.getItem("x-auth-token");
    
    return http.get(`${config.twitterapi}/getProfile`);
};

export const uploadTokenUserPhoto = (userdata) => {
    http.defaults.headers.post["Content-Type"] = "multipart/form-data";
    http.defaults.headers.post["x-auth-token"] = localStorage.getItem("x-auth-token");

    return http.post(`${config.twitterapi}/uploadUserPhoto`, userdata);
};