import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "404Header": "404 Error",
            "404Link": "Twitter.com",
            "startHeader-1": "Happening now",
            "startHeader-2": "Join Twitter today",
            "startSignupBtn": "Sign Up",
            "startLoginBtn": "Log In",
            "startSearchBtn": "Explore",
            "startSignupHeader": "Create New Account",
            "startLoginHeader": "Login with Account",
            "startFormLabel-1": "Full Name",
            "startFormLabel-2": "User Name",
            "startFormLabel-3": "Password",
            "startFormHandler": "Cancel",
            "startFormHandlerSignup": "Save",
            "startFormHandlerLogin": "Log In",
            "signupSuccessMessage": "User created successfully",
            "signupWarningMessage": "Username already exists. Please log in to your account",
            "loginSuccessMessage": "User logged in successfully",
            "loginErrorMessage": "User information is incorrect",
            "homeTitleMenu": "Home",
            "exploreTitleMenu": "Explore",
            "notificationsTitleMenu": "Notifications",
            "messagesTitleMenu": "Messages",
            "profileTitleMenu": "Profile",
            "moreTitleMenu": "More",
            "tweetBtnMenu": "Tweet",
            "exploreInpPlaceholder": "Search Twitter",
            "hashTagsHeader": "Trends for You",
            "newTweetLabel": "What's Happening?",
            "newTweetBtn": "Tweet",
            "tokenUserBtn": "Settings",
            "tokenUserBtn-1": "Change Photo",
            "tokenUserBtn-2": "Logout",
            "userBtn-1": "Tweets",
            "userBtn-2": "Tweets & replise",
            "userBtn-3": "Media",
            "userBtn-4": "Likes",
            "userTweetTitle": "User has no tweets",
            "404Helmet": "NotFound | Twitter",
            "startHelmet": "Twitter. It's what's happening | Twitter",
            "tweetHelmet": "Home | Twitter",
            "exploreHelmet": "Explore | Twitter",
            "profileHelmet": "Account | Twitter",
        }
    },
    fa: {
        translation: {
            "404Header": "???????? 404",
            "404Link": "Twitter.com",
            "startHeader-1": "???????????????? ???? ???????? ???? ?????? ???? ???????? ??????",
            "startHeader-2": "???????? ???????? ???? ???????????? ????????????????",
            "startSignupBtn": "?????? ??????",
            "startLoginBtn": "????????",
            "startSearchBtn": "?????????? ???? ?????????? ??????????",
            "startSignupHeader": "?????????? ???????? ????????",
            "startLoginHeader": "???????? ???? ???????? ????????????",
            "startFormLabel-1": "?????? ?? ?????? ????????????????",
            "startFormLabel-2": "?????? ????????????",
            "startFormLabel-3": "?????? ????????",
            "startFormHandler": "??????",
            "startFormHandlerSignup": "??????????",
            "startFormHandlerLogin": "????????",
            "signupSuccessMessage": "?????????? ???? ???????????? ?????????? ????",
            "signupWarningMessage": "?????? ???????????? ?????????? ??????. ???????? ???????? ???????? ???????????? ?????? ????????.",
            "loginSuccessMessage": "?????????? ???? ???????????? ???????? ????",
            "loginErrorMessage": "?????????????? ?????????? ???????????? ??????",
            "homeTitleMenu": "????????",
            "exploreTitleMenu": "??????????",
            "notificationsTitleMenu": "?????????? ????",
            "messagesTitleMenu": "???????? ????",
            "profileTitleMenu": "?????????? ??????????",
            "moreTitleMenu": "??????????",
            "tweetBtnMenu": "??????????",
            "exploreInpPlaceholder": "?????????? ???? ????????????",
            "hashTagsHeader": "?????? ???????? ???????? ????",
            "newTweetLabel": "???? ???????? ?????????? ???????????? ????????",
            "newTweetBtn": "??????",
            "tokenUserBtn": "??????????????",
            "tokenUserBtn-1": "?????????? ??????????",
            "tokenUserBtn-2": "???????? ???? ????????",
            "userBtn-1": "?????????? ????",
            "userBtn-2": "?????????? ???? ?? ?????????? ????",
            "userBtn-3": "???????????? ????",
            "userBtn-4": "???????? ????????????",
            "userTweetTitle": "?????????? ?????? ???????????? ??????????",
            "404Helmet": "?????????????? | ????????????",
            "startHelmet": "????????????. ?????? ?????????????? ???? ???????? ???? ???? ?????? | ????????????",
            "tweetHelmet": "???????? | ????????????",
            "exploreHelmet": "?????????? | ????????????",
            "profileHelmet": "?????????? ?????????? | ????????????",
        }
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem("i18nextLng"),
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
