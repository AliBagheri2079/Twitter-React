import React, { Fragment, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserLogo from "../profile/UserLogo";
import { clearUsers, loadUsers } from "./../../actions/users";

const Explore = () => {
  const searchInp = useRef(null);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { t } = useTranslation();

  const handleExplore = () => {
    searchInp.current.focus();
    dispatch(clearUsers());
  };
  useEffect(() => {
    handleExplore();
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>{t("exploreHelmet")}</title>
      </Helmet>

      <div
        className="search_form"
        style={{ marginTop: "20px", marginBottom: "10px" }}
      >
        <form onSubmit={(e) => e.preventDefault()} action="" method="">
          <div className="input-group search_box">
            <button type="submit" className="btn d-inline" id="basic-addon1">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
            <input
              ref={searchInp}
              onChange={() => dispatch(loadUsers(searchInp.current.value))}
              type="text"
              className={`form-control search_inp ${
                localStorage.getItem("i18nextLng") === "fa-IR"
                  ? "irNast px-3"
                  : "enOp"
              }`}
              placeholder={t("exploreInpPlaceholder")}
              aria-label={t("exploreInpPlaceholder")}
              aria-describedby="basic-addon1"
              dir={
                localStorage.getItem("i18nextLng") === "fa-IR" ? "rtl" : "ltr"
              }
            />
          </div>
        </form>
      </div>

      <div
        className="col-sm-8 offset-sm-2"
      >
        {users.map((user) => (
          <div key={user._id} className="user_search_item">
            <NavLink
              to={`/home/profile/${user.username}`}
              className="user_btn enOp btn text-light"
            >
              <UserLogo imageUrl={user.image} />

              <div className="user_info">
                <p id="fullname" className="text-capitalize">
                  {user.name}
                </p>

                <p id="username">@{user.username}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Explore;
