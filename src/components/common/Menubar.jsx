import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import UserLogo from "./../profile/UserLogo";
import {
  handleTokenUserProfile,
  useProfileDispatch,
  useProfileState,
} from "../context/profileContext";

const Menubar = () => {
  const profileDispatch = useProfileDispatch();
  const { tokenUserInfo } = useProfileState();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === "fa") localStorage.setItem("i18nextLng", "fa-IR");
    else localStorage.setItem("i18nextLng", "en-US");
    window.location.reload();
  };

  const handleProfile = () => handleTokenUserProfile(profileDispatch);
  useEffect(() => {
    handleProfile();
  }, []);

  const menubarItems = [
    {
      route: "/home",
      iconClassName: "fas fa-home menubar_items",
      iconStyle: {
        margin: "auto -4px",
      },
      title: t("homeTitleMenu"),
    },
    {
      route: "/home/explore",
      iconClassName: "fas fa-hashtag menubar_items",
      title: t("exploreTitleMenu"),
    },
    {
      route: "/home/notifications",
      iconClassName: "fas fa-bell menubar_items",
      title: t("notificationsTitleMenu"),
      titleStyle: {
        fontSize: "1.35rem",
      },
    },
    {
      route: "/home/messages",
      iconClassName: "fas fa-envelope menubar_items",
      title: t("messagesTitleMenu"),
    },
    {
      route: "/home/profile",
      iconClassName: "fas fa-user-alt menubar_items",
      title: t("profileTitleMenu"),
    },
    {
      route: "/home/more",
      iconClassName: "fas fa-ellipsis-h menubar_items",
      title: t("moreTitleMenu"),
    },
  ];

  return (
    <nav className="menubar">
      <div
        className="menubar_content"
        style={
          localStorage.getItem("i18nextLng") === "fa-IR"
            ? { direction: "rtl", textAlign: "right" }
            : null
        }
      >
        <div>
          <i
            className="fab fa-twitter"
            id={
              localStorage.getItem("i18nextLng") === "fa-IR"
                ? "tweeter-logo-fa"
                : "tweeter-logo"
            }
          ></i>
          <span></span>
        </div>

        {menubarItems.map((item) => (
          <div className="d-block" key={Math.random() * 20}>
            <NavLink
              to={item.route}
              activeStyle={{ color: "#1a91da" }}
              className={`menu_link d-inline-block ${
                localStorage.getItem("i18nextLng") === "fa-IR"
                  ? "menu_link_fa"
                  : null
              }`}
            >
              <i className={item.iconClassName} style={item.iconStyle}></i>
              <span
                className={
                  localStorage.getItem("i18nextLng") === "fa-IR"
                    ? "irNast"
                    : "enOp"
                }
                style={item.titleStyle}
              >
                {item.title}
              </span>
            </NavLink>
          </div>
        ))}

        <NavLink
          to="/home"
          className={`${
            localStorage.getItem("i18nextLng") === "fa-IR" ? "mx-1" : "m-2"
          }
          btn btn-primary p-2 rounded-pill`}
          id="tweet_btn_1"
          onClick={() =>
            setTimeout(() => {
              document.querySelector(".create-new-tweet").focus();
            }, 10)
          }
        >
          <i className="fas fa-pen" style={{ fontSize: "1.4rem" }}></i>
        </NavLink>

        <NavLink
          to="/home"
          className={`${
            localStorage.getItem("i18nextLng") === "fa-IR"
              ? "irNast"
              : "enOp my-2"
          }
           btn btn-primary btn-lg rounded-pill
          `}
          id="tweet_btn_2"
          style={
            localStorage.getItem("i18nextLng") === "fa-IR"
              ? {
                  padding: "0.6rem 0 0.1rem 0",
                  margin: "0rem 2rem 0rem 0.5rem",
                  fontSize: "1.3rem",
                }
              : {
                  padding: "0.5rem 0",
                  margin: "2rem 2rem 2rem 0.5rem",
                  fontSize: "1.1rem",
                }
          }
          onClick={() =>
            setTimeout(() => {
              document.querySelector(".create-new-tweet").focus();
            }, 10)
          }
        >
          {t("tweetBtnMenu")}
        </NavLink>

        <br className="break_line" />

        <NavLink
          to="/home/profile"
          activeStyle={{ color: "#1a91da" }}
          className="user_btn enOp btn my-1 text-light"
        >
          {localStorage.getItem("i18nextLng") === "fa-IR" ? (
            <div className="prof-logo-fa prof-logo-fa-menubar">
              <UserLogo imageUrl={tokenUserInfo.image} />
            </div>
          ) : (
            <UserLogo imageUrl={tokenUserInfo.image} />
          )}

          <div
            className="user_title"
            style={
              localStorage.getItem("i18nextLng") === "fa-IR"
                ? { float: "left" }
                : { float: "right" }
            }
          >
            <p
              id="fullname"
              className="flex-row text-capitalize"
              style={{ fontSize: "16px", margin: "2px 0 0 10px" }}
            >
              {tokenUserInfo.name}
            </p>
            <p
              id="username"
              style={{
                color: "gray",
                fontSize: "10px",
                marginLeft: "4px",
              }}
            >
              {localStorage.getItem("i18nextLng") === "fa-IR"
                ? tokenUserInfo.username + "@"
                : "@" + tokenUserInfo.username}
            </p>
          </div>
        </NavLink>

        <div
          className={
            localStorage.getItem("i18nextLng") === "fa-IR"
              ? "change_lang_fa"
              : "change_lang"
          }
        >
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
            className="irNast btn p-0 pt-sm-2 shadow-none"
            onClick={() => changeLanguage("fa")}
            style={
              localStorage.getItem("i18nextLng") === "fa-IR"
                ? { color: "#1a91da" }
                : { color: "gray" }
            }
          >
            فارسی
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
