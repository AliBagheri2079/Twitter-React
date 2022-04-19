import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { loadHashtags } from "./../../actions/hashTags";

const Hashtags = () => {
  const dispatch = useDispatch();
  const hashTags = useSelector((state) => state.hashTags);
  const { t } = useTranslation();

  const loadAllHashtags = () => dispatch(loadHashtags());
  useEffect(() => {
    loadAllHashtags();
  }, []);

  return (
    <aside className="trends">
      <div
        className="trends_content"
        style={
          localStorage.getItem("i18nextLng") === "fa-IR"
            ? { direction: "rtl" }
            : null
        }
      >
        <div className="trends_content_box">
          <table className="table table-inverse table-responsive">
            <thead className="thead-inverse">
              <tr>
                {localStorage.getItem("i18nextLng") === "fa-IR" ? (
                  <th className="thead_title irNast">{t("hashTagsHeader")}</th>
                ) : (
                  <th className="thead_title enOp">{t("hashTagsHeader")}</th>
                )}
              </tr>
            </thead>

            <tbody>
              {hashTags.map((hash) => (
                <tr key={hash._id}>
                  <td className="tbody_items enOp">
                    <span
                      className={`tbody_items_i ${
                        localStorage.getItem("i18nextLng") === "fa-IR"
                          ? "float-end"
                          : "float-start"
                      }`}
                    >
                      #{hash.text}
                    </span>
                    <span
                      className={`text-primary ${
                        localStorage.getItem("i18nextLng") === "fa-IR"
                          ? "float-start"
                          : "float-end"
                      }`}
                    >
                      {hash.count}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </aside>
  );
};

export default Hashtags;
