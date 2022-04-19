import { createContext } from "react";

export const userContext = createContext({
    fullname: "",
    setFullname: () => { },
    username: "",
    setUsername: () => { },
    password: "",
    setPassword: () => { },
    showSignUp: Boolean,
    showLogin: Boolean,
    openSignDialog: () => { },
    openLoginDialog: () => { },
    closeSignDialog: () => { },
    closeLoginDialog: () => { },
    clearData: () => { },
    validator: null,
    faValidator: null,
    handleSignup: () => { },
    handleLogin: () => { },
})