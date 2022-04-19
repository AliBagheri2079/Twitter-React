import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link, withRouter } from "react-router-dom";
import { userContext } from "../context/userContext";

const StartPage = ({ location }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === "fa") localStorage.setItem("i18nextLng", "fa-IR");
    else localStorage.setItem("i18nextLng", "en-US");
    window.location.reload();
  };

  const { openSignDialog, openLoginDialog } = useContext(userContext);
  if (location.pathname === "/signup") openSignDialog();
  if (location.pathname === "/login") openLoginDialog();

  return (
    <div>
      <Helmet>
        <title>{t("startHelmet")}</title>
      </Helmet>

      <header>
        <div
          className={
            localStorage.getItem("i18nextLng") === "fa-IR"
              ? "log logFa"
              : "log logEn"
          }
        >
          <nav>
            <div className="animate__animated animate__flash mb-1">
              <i className="fab fa-twitter twitter_logo"></i>
            </div>

            <button
              className="enOp btn p-0 shadow-none"
              onClick={() => changeLanguage("en")}
              style={
                localStorage.getItem("i18nextLng") === "en-US"
                  ? { color: "#1a91da" }
                  : { color: "gray" }
              }
            >
              {" "}
              English
            </button>
            {" | "}
            <button
              className="irNast btn pt-2 p-0 shadow-none"
              onClick={() => changeLanguage("fa")}
              style={
                localStorage.getItem("i18nextLng") === "fa-IR"
                  ? { color: "#1a91da", lineHeight:0 }
                  : { color: "gray", lineHeight:0 }
              }
            >
              فارسی
            </button>
          </nav>

          <div className="head">
            <h1
              className={
                localStorage.getItem("i18nextLng") === "fa-IR"
                  ? "irNast"
                  : "enOp"
              }
            >
              {t("startHeader-1")}
            </h1>
            <h3
              className={
                localStorage.getItem("i18nextLng") === "fa-IR"
                  ? "irNast"
                  : "enOp"
              }
            >
              {t("startHeader-2")}
            </h3>
          </div>

          <div
            className={`${
              localStorage.getItem("i18nextLng") === "fa-IR"
                ? "irNast form_btn"
                : "enOp"
            }
           d-grid gap-2 col-10 offset-1 col-md-8 offset-md-2 col-lg-10 offset-lg-0
          `}
          >
            <Link
              to="/signup"
              className="btn btn-primary mt-1 my-sm-2 py-2 rounded"
            >
              {t("startSignupBtn")}
            </Link>

            <Link to="/login" className="btn btn-outline-primary py-2 rounded">
              {t("startLoginBtn")}
            </Link>

            <div className="text-center">
              <Link
                to="/explore"
                className={`${
                  localStorage.getItem("i18nextLng") === "fa-IR"
                    ? "irNast py-2"
                    : "enOp"
                } text-decoration-none`}
                style={{ fontSize: "15px", color: "#5eb2e6" }}
              >
                {t("startSearchBtn")}
              </Link>
            </div>
          </div>
        </div>

        <div
          className={
            localStorage.getItem("i18nextLng") === "fa-IR"
              ? "img imgFa"
              : "img imgEn"
          }
        >
          <i className="fab fa-twitter twitter_logo"></i>
        </div>
      </header>
    </div>
  );
};

export default withRouter(StartPage);
