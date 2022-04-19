import Darkmode from "darkmode-js";

const options = {
    bottom: "20px",
    left: "unset",
    right: "15px",
    time: "0.5s",
    mixColor: "#1e1e1f",
    backgroundColor: "#15202b",
    buttonColorDark: "#2e2e2b",
    buttonColorLight: "#f7fbff",
    saveInCookies: true,
    label: "🌓",
    autoMatchOsTheme: true,
};


const darkmode = new Darkmode(options);
darkmode.showWidget();