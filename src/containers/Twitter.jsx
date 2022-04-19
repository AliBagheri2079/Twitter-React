import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router";
import { isEmpty } from "lodash";
import NoMatch from "react-router-nomatch";
import { ToastContainer } from "react-toastify";

import UserContextAuth from "../components/context/UserContextAuth";
import StartPage from "../components/start/StartPage";
import MainLayout from "../components/layout/MainLayout";
import Tweets from "../components/tweet/Tweets";
import Explore from "../components/common/Explore";
import UsersProfile from "../components/profile/UsersProfile";
import TokenUserProfile from "../components/profile/TokenUserProfile";
import NotFound from "../components/common/NotFound";

const Twitter = () => {
  const user = localStorage.getItem("x-auth-token");

  return (
    <Fragment>
      <Switch>
        <Route path={["/home/*"]}>
          <Switch>
            <Route
              exact
              path="/home/profile/:id"
              render={() =>
                !isEmpty(user) ? (
                  <MainLayout>
                    <UsersProfile />
                  </MainLayout>
                ) : (
                  <Redirect to="/" />
                )
              }
            />

            <Route
              exact
              path="/home/profile"
              render={() =>
                !isEmpty(user) ? (
                  <MainLayout>
                    <TokenUserProfile />
                  </MainLayout>
                ) : (
                  <Redirect to="/" />
                )
              }
            />

            <Route
              exact
              path="/home/explore"
              render={() =>
                !isEmpty(user) ? (
                  <MainLayout>
                    <Explore />
                  </MainLayout>
                ) : (
                  <Redirect to="/" />
                )
              }
            />

            <NoMatch
              render={(match) => (match ? null : <NotFound />)}
              alwaysRender={true}
            ></NoMatch>
          </Switch>
        </Route>

        <Route
          exact
          path="/home"
          render={() =>
            !isEmpty(user) ? (
              <MainLayout>
                <Tweets />
              </MainLayout>
            ) : (
              <Redirect to="/" />
            )
          }
        />

        <Route
          exact
          path="/login"
          render={() =>
            isEmpty(user) ? (
              <UserContextAuth>
                <StartPage />
              </UserContextAuth>
            ) : (
              <Redirect to="/home/profile" />
            )
          }
        />

        <Route
          exact
          path="/signup"
          render={() =>
            isEmpty(user) ? (
              <UserContextAuth>
                <StartPage />
              </UserContextAuth>
            ) : (
              <Redirect to="/home/profile" />
            )
          }
        />

        <Route
          exact
          path="/"
          render={() =>
            isEmpty(user) ? (
              <UserContextAuth>
                <StartPage />
              </UserContextAuth>
            ) : (
              <Redirect to="/home/profile" />
            )
          }
        />

        <NoMatch
          render={(match) => (match ? null : <NotFound />)}
          alwaysRender={true}
        ></NoMatch>
      </Switch>

      <ToastContainer
        rtl={localStorage.getItem("i18nextLng") === "fa-IR" ? true : false}
      ></ToastContainer>
    </Fragment>
  );
};

export default Twitter;
