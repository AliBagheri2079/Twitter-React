import React, { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { loginUser, registerUser } from "../../services/userService";
import { errorMessage, infoMessage, warningMessage } from "../../utils/toast";
import { userContext } from "./userContext";
import Signup from "../log/Signup";
import Login from "../log/Login";
import { useTranslation } from "react-i18next";

const UserContextAuth = ({ children, history }) => {
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [, forceSignUpdate] = useState();
  const [, forceLoginUpdate] = useState();

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const clearData = () => {
    setFullname();
    setUsername();
    setPassword();
    forceSignUpdate(2);
    forceLoginUpdate(3);
  };

  const openSignDialog = () => setShowSignUp(true);
  const openLoginDialog = () => setShowLogin(true);
  const closeSignDialog = () => setShowSignUp(false);
  const closeLoginDialog = () => setShowLogin(false);

  const validator = useRef(
    new SimpleReactValidator({
      element: (message) => <div className="text-danger">{message}</div>,
    })
  );

  const faValidator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی میباشد",
        min: "کمتر از 4 کاراکتر نباید باشد",
        max: "بیشتر از 12 کاراکتر نباید باشد",
        alpha_num: "نام کاربری باید شامل اعداد، حروف انگلیسی و فاقد فاصله باشد",
      },
      element: (message) => (
        <div className="text-danger irNast irSignForm pt-3">{message}</div>
      ),
    })
  );

  const handleSignup = async (event) => {
    event.preventDefault();
    const user = { name: fullname, username, password };

    try {
      if (
        localStorage.getItem("i18nextLng") === "fa-IR"
          ? faValidator.current.allValid()
          : validator.current.allValid()
      ) {
        dispatch(showLoading());

        const { status } = await registerUser(user);
        if (status === 200) {
          infoMessage(t("signupSuccessMessage"));
          dispatch(hideLoading());
          setTimeout(() => {
            closeSignDialog();
          }, 10);
          history.replace("/login");
        }
      } else {
        localStorage.getItem("i18nextLng") === "fa-IR"
          ? faValidator.current.showMessages()
          : validator.current.showMessages();
        forceSignUpdate(50);
      }
    } catch (ex) {
      console.error(ex);
      warningMessage(t("signupWarningMessage"));
      dispatch(hideLoading());
      setTimeout(() => {
        closeSignDialog();
      }, 10);
      history.replace("/login");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const user = { username, password };

    try {
      if (localStorage.getItem("i18nextLng")) {
        dispatch(showLoading());

        const { status, data } = await loginUser(user);
        if (status === 200) {
          localStorage.setItem("x-auth-token", data["x-auth-token"]);
          infoMessage(t("loginSuccessMessage"));
          dispatch(hideLoading());
          closeLoginDialog();
          window.location.reload();
        }
      } else {
        localStorage.getItem("i18nextLng") === "fa-IR"
          ? faValidator.current.showMessages()
          : validator.current.showMessages();
        forceLoginUpdate(124);
      }
    } catch (ex) {
      console.error(ex);
      errorMessage(t("loginErrorMessage"));
      dispatch(hideLoading());
    }
  };

  return (
    <userContext.Provider
      value={{
        fullname,
        setFullname,
        username,
        setUsername,
        password,
        setPassword,
        showSignUp,
        showLogin,
        openSignDialog,
        openLoginDialog,
        closeSignDialog,
        closeLoginDialog,
        clearData,
        validator,
        faValidator,
        handleSignup,
        handleLogin,
      }}
    >
      <Signup />
      <Login />

      {children}
    </userContext.Provider>
  );
};

export default withRouter(UserContextAuth);
