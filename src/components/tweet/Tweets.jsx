import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import NewTweet from "./NewTweet";
import {
  handleLikeTweet,
  handleRetweet,
  loadTweets,
} from "./../../actions/tweets";
import UserLogo from "./../profile/UserLogo";

const Tweets = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets);
  const { t } = useTranslation();

  const renderTweets = (text) => {
    return {
      __html: text.replace(/#\S+/g, `<span class="text-primary">$&</span>`),
    };
  };

  const loadAllTweets = () => dispatch(loadTweets());
  useEffect(() => {
    loadAllTweets();
  }, []);

  return (
    <div>
      <Helmet>
        <title>{t("tweetHelmet")}</title>
      </Helmet>

      <section className="tweets">
        <NewTweet />

        <div
          className="tweets_content"
          style={
            localStorage.getItem("i18nextLng") === "fa-IR"
              ? { direction: "rtl" }
              : { direction: "ltr" }
          }
        >
          {tweets.map((tweet) => (
            <div className="tweets_content_items" key={tweet._id}>
              <NavLink
                to={`/home/profile/${tweet.user.username}`}
                className="enOp user_btn btn text-light"
              >
                {localStorage.getItem("i18nextLng") === "fa-IR" ? (
                  <div className="prof-logo-fa">
                    <UserLogo imageUrl={tweet.user.image} />
                  </div>
                ) : (
                  <UserLogo imageUrl={tweet.user.image} />
                )}

                <div style={{ float: "left" }}>
                  <p
                    id="fullname"
                    className="text-capitalize"
                    style={{ fontSize: "16px", margin: "2px 0 0 10px" }}
                  >
                    {tweet.user.name}
                  </p>

                  <p
                    id="username"
                    style={{
                      color: "gray",
                      fontSize: "10px",
                      margin: "0px 8px",
                    }}
                  >
                    {localStorage.getItem("i18nextLng") === "fa-IR"
                      ? tweet.user.username + "@"
                      : "@" + tweet.user.username}
                  </p>
                </div>
              </NavLink>

              <div style={{ margin: "0.5rem 0 0 2.8rem" }}>
                <p
                  className="enOp"
                  style={{ fontSize: "15px" }}
                  dangerouslySetInnerHTML={renderTweets(`${tweet.text}`)}
                />

                <div className="pt-3 d-flex justify-content-between">
                  <div className="content_icon first-icon" title="Disabled">
                    <div className="content_comment d-inline">
                      <i className="far fa-comment tweets_icon"></i>
                    </div>
                  </div>

                  <div className="content_icon second-icon">
                    <div
                      className="content_retweet d-inline"
                      onClick={(event) => {
                        dispatch(handleRetweet(event, tweet._id));
                        document.getElementById("floatingTextarea").focus();
                      }}
                    >
                      <i className="fas fa-retweet tweets_icon"></i>
                    </div>
                  </div>

                  <div className="content_icon third-icon">
                    <div
                      className="content_heart d-inline"
                      onClick={() => dispatch(handleLikeTweet(tweet._id))}
                    >
                      <i className="fas fa-heart tweets_icon"></i>
                    </div>
                    <span className="content_num">{tweet.likes}</span>
                  </div>

                  <div className="content_icon last-icon" title="Disabled">
                    <div className="content_down d-inline">
                      <i className="far fa-arrow-alt-circle-down tweets_icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tweets;
