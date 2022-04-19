import React, { createContext, useReducer, useContext } from 'react';
import { likeTweet } from '../../services/tweetService';
import { allUsersData, getUserTweet, uploadTokenUserPhoto, getTokenUserProfile } from '../../services/userService';
import { infoMessage } from '../../utils/toast';
import { decodeToken } from '../../utils/decodeToken';

const profileStateContext = createContext();
const profileDispatchContext = createContext();

const profileReducer = (state, action) => {
    switch (action.type) {
        case "TOKEN_USER_INFO":
            return { ...state, tokenUserInfo: action.payload };
        case "USER_INFO":
            return { ...state, userInfo: action.payload };
        case "USER_TWEET":
            return { ...state, userTweet: action.payload };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export const ProfileProvider = ({ children }) => {
    const [state, dispatch] = useReducer(profileReducer, {
        tokenUserInfo: [],
        userInfo: [],
        userTweet: [],
    });

    return (
        <profileStateContext.Provider value={state}>
            <profileDispatchContext.Provider value={dispatch}>
                {children}
            </profileDispatchContext.Provider>
        </profileStateContext.Provider>
    )
}

export const useProfileState = () => {
    const context = useContext(profileStateContext);
    if (context === undefined) throw new Error("useProfileState must be used within a ProfileProvider");
    return context;
}

export const useProfileDispatch = () => {
    const context = useContext(profileDispatchContext);
    if (context === undefined) throw new Error("useProfileDispatch must be used within a ProfileProvider");
    return context;
}


//########
export const handleUserTweet = async (dispatch, user) => {
    try {
        const { data, status } = await getUserTweet({ user });
        if (status === 200) dispatch({ type: "USER_TWEET", payload: data });
    } catch (ex) {
        console.error(ex);
    }
}

export const handleLikeUserTweet = async (dispatch, id, userId) => {
    try {
        const { status } = await likeTweet(id);
        if (status === 200) handleUserTweet(dispatch, userId);
    } catch (ex) {
        console.error(ex);
    }
}

export const handleUserProfile = async (dispatch, usersUsername) => {
    try {
        const { data, status } = await allUsersData();

        if (status === 200) {
            const [filteredUser] = data.filter((data) =>
                data.username.includes(usersUsername)
            );
            dispatch({ type: "USER_INFO", payload: filteredUser });
            handleUserTweet(dispatch, filteredUser._id);
        }
    } catch (ex) {
        console.error(ex);
    }
};

export const handleTokenUserProfile = async (dispatch) => {
    try {
        const { data, status } = await getTokenUserProfile();
        const tokenUserId = decodeToken(localStorage.getItem("x-auth-token")).payload._id;

        if (status === 200) {
            dispatch({ type: "TOKEN_USER_INFO", payload: data });
            handleUserTweet(dispatch, tokenUserId);
        }
    } catch (ex) {
        console.error(ex);
    }
};


export const changeTokenUserLogo = async (dispatch, event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])

    const imageData = new FormData();
    imageData.append("image", event.target.files[0]);

    try {
        const { data } = await uploadTokenUserPhoto(imageData);
        if (data.imagePath) {
            infoMessage("Photo uploaded successfully");
            handleTokenUserProfile(dispatch);
        }
    } catch (ex) {
        console.error(ex)
    }
}