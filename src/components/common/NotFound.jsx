import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t("404Helmet")}</title>
      </Helmet>

      <div style={{ textAlign: "center", paddingTop: "13%" }}>
        <h1
          className={`
        ${localStorage.getItem("i18nextLng") === "fa-IR" ? "irNast" : "enOp"}
        text-warning animate__animated animate__shakeY
         `}
          style={{
            fontSize: "7.5rem",
            lineHeight: 1,
            paddingBottom: "5rem",
          }}
        >
          {t("404Header")}
        </h1>

        <Link
          to="/"
          className="enOp"
          style={{
            fontSize: "1.5rem",
          }}
        >
          {t("404Link")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
