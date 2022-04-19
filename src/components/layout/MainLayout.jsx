import React from "react";
import Menubar from "./../common/Menubar";
import Hashtags from "./../tweet/Hashtags";

const MainLayout = ({ children }) => {
  return (
    <div className="d-flex">
      {localStorage.getItem("i18nextLng") === "fa-IR" ? (
        <Hashtags />
      ) : (
        <Menubar />
      )}

      <div className="main-layout">
        <div className="main-layout-content">{children}</div>
      </div>

      {localStorage.getItem("i18nextLng") === "fa-IR" ? (
        <Menubar />
      ) : (
        <Hashtags />
      )}
    </div>
  );
};

export default MainLayout;

//iframe and 32toplearn-react
