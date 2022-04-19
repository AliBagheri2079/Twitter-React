import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { handleNewTweet } from "./../../actions/newTweet";

const NewTweet = () => {
  const dispatch = useDispatch();
  const newTweet = useSelector((state) => state.newTweet);
  const { t } = useTranslation();
  const newTweetInp = useRef(null);

  useEffect(() => {
    newTweetInp.current.focus();
  }, []);

  return (
    <form
      onSubmit={(event) => {
        dispatch(handleNewTweet(event, newTweetInp.current.value));
      }}
      className="was-validated"
      action=""
      method=""
    >
      <div
        className="form-floating"
        dir={localStorage.getItem("i18nextLng") === "fa-IR" ? "rtl" : "ltr"}
      >
        <textarea
          className={`form-control is-invalid create-new-tweet ${
            localStorage.getItem("i18nextLng") === "fa-IR" ? "irNast" : "enOp"
          }`}
          style={
            localStorage.getItem("i18nextLng") === "fa-IR"
              ? { fontSize: "1.2rem" }
              : null
          }
          placeholder="..."
          id="floatingTextarea"
          ref={newTweetInp}
          value={newTweet}
          onChange={() =>
            dispatch({ type: "TWEET", payload: newTweetInp.current.value })
          }
          minLength="20"
          required
        />
        <label
          htmlFor="floatingTextarea"
          className={`form-controll ${
            localStorage.getItem("i18nextLng") === "fa-IR" ? "irNast" : "enOp"
          }`}
          style={
            localStorage.getItem("i18nextLng") === "fa-IR"
              ? { fontSize: "1.2rem" }
              : null
          }
        >
          {t("newTweetLabel")}
        </label>

        <div
          style={
            localStorage.getItem("i18nextLng") === "fa-IR"
              ? { direction: "ltr", marginTop: "-10px" }
              : { direction: "rtl", marginTop: "-10px" }
          }
        >
          <button
            type="submit"
            className={`btn btn-primary rounded-pill px-3 my-3 mx-0 ${
              localStorage.getItem("i18nextLng") === "fa-IR"
                ? "pt-3 irNast"
                : "enOp"
            }`}
            style={
              localStorage.getItem("i18nextLng") === "fa-IR"
                ? { fontSize: "1.3rem", lineHeight: 0.6 }
                : null
            }
          >
            {t("newTweetBtn")}
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewTweet;
