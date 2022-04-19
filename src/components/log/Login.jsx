import React, { useContext } from "react";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import { withRouter } from "react-router";
import LoadingBar from "react-redux-loading-bar";
import { useTranslation } from "react-i18next";
import { userContext } from "../context/userContext";

const Login = ({ history }) => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    showLogin,
    closeLoginDialog,
    clearData,
    validator,
    faValidator,
    handleLogin,
  } = useContext(userContext);

  const { t } = useTranslation();

  return (
    <DialogOverlay
      isOpen={showLogin}
      onDismiss={() => {
        clearData();
        closeLoginDialog();
        history.replace("/");
      }}
    >
      <LoadingBar
        style={{ backgroundColor: "#1a91da", height: "4px" }}
        direction={
          localStorage.getItem("i18nextLng") === "fa-IR" ? "rtl" : "ltr"
        }
      />
      <DialogContent className="dialog" aria-label="dialog">
        <h3
          className={
            localStorage.getItem("i18nextLng") === "fa-IR"
              ? "irNast irSignForm"
              : "enOp"
          }
        >
          {t("startLoginHeader")}
        </h3>

        <form onSubmit={(e) => handleLogin(e)} action="" method="">
          <div
            className={`form-floating mb-3
          ${
            localStorage.getItem("i18nextLng") === "fa-IR"
              ? "form-floating-r"
              : "form-floating-l"
          }`}
          >
            <input
              type="text"
              name="username"
              className={`form-control enOp
                ${
                  localStorage.getItem("i18nextLng") === "fa-IR"
                    ? "irSignForm"
                    : ""
                }`}
              id="floatingUsername"
              placeholder="..."
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                localStorage.getItem("i18nextLng") === "fa-IR"
                  ? faValidator.current.showMessageFor("username")
                  : validator.current.showMessageFor("username");
              }}
            />
            <label
              htmlFor="floatingUsername"
              className={
                localStorage.getItem("i18nextLng") === "fa-IR"
                  ? "irNast"
                  : "enOp"
              }
            >
              {t("startFormLabel-2")}
            </label>
            {localStorage.getItem("i18nextLng") === "fa-IR"
              ? faValidator.current.message(
                  "username",
                  username,
                  "required|alpha_num|min:4"
                )
              : validator.current.message(
                  "username",
                  username,
                  "required|alpha_num|min:4"
                )}
          </div>

          <div
            className={`form-floating mb-3
          ${
            localStorage.getItem("i18nextLng") === "fa-IR"
              ? "form-floating-r"
              : "form-floating-l"
          }`}
          >
            <input
              name="password"
              type="password"
              className={`form-control
                ${
                  localStorage.getItem("i18nextLng") === "fa-IR"
                    ? "irSignForm"
                    : ""
                }`}
              id="floatingPassword"
              placeholder="..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                localStorage.getItem("i18nextLng") === "fa-IR"
                  ? faValidator.current.showMessageFor("password")
                  : validator.current.showMessageFor("password");
              }}
            />
            <label
              htmlFor="floatingPassword"
              className={
                localStorage.getItem("i18nextLng") === "fa-IR"
                  ? "irNast"
                  : "enOp"
              }
            >
              {t("startFormLabel-3")}
            </label>
            {localStorage.getItem("i18nextLng") === "fa-IR"
              ? faValidator.current.message(
                  "password",
                  password,
                  "required|min:4|max:12"
                )
              : validator.current.message(
                  "password",
                  password,
                  "required|min:4|max:12"
                )}
          </div>

          {localStorage.getItem("i18nextLng") === "fa-IR" ? (
            <div className="irNast irSignForm">
              <span
                className="btn btn-danger py-2 px-3"
                style={{ width: "3rem" }}
                onClick={() => {
                  clearData();
                  closeLoginDialog();
                  history.replace("/");
                }}
              >
                {t("startFormHandler")}
              </span>
              <button
                className="btn btn-outline-success py-2 px-3 mx-2"
                type="submit"
              >
                {t("startFormHandlerLogin")}
              </button>
            </div>
          ) : (
            <div>
              <span
                className="btn btn-danger enOp"
                style={{ width: "4.8rem" }}
                onClick={() => {
                  clearData();
                  closeLoginDialog();
                  history.replace("/");
                }}
              >
                {t("startFormHandler")}
              </span>
              <button
                className="btn btn-outline-success enOp mx-2"
                type="submit"
              >
                {t("startFormHandlerLogin")}
              </button>
            </div>
          )}
        </form>
      </DialogContent>
    </DialogOverlay>
  );
};

export default withRouter(Login);
