import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTitle } from "../Redux/slices/postSlice";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const dispatch = useDispatch();

  const { searchTitle } = useSelector((state) => state.postsR);
  const { t } = useTranslation("extra");
  const { language } = useSelector((state) => state.i18nR);

  const handleChange = (e) => {
    dispatch(setSearchTitle(e.target.value));
  };

  return (
    <div className="mb-4">
      <div className="input-group shadow-sm">
        <span className="input-group-text border-end-0 text-muted bg-transparent">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control border-start-0 ps-0 bg-transparent"
          placeholder={t("Search")}
          onChange={handleChange}
          style={{
            boxShadow: "none",
            borderColor: "rgb(222, 226, 230)",
            outline: "none",
          }}
          dir={language === "en" ? "ltr" : "rtl"}
        />
      </div>
    </div>
  );
};

export default memo(SearchBar);
