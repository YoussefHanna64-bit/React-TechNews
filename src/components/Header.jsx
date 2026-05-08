import { useDispatch, useSelector } from "react-redux";
import "../styles/Header.css";
import { Link, NavLink, useNavigate } from "react-router";
import { logout } from "../Redux/slices/authSlice";
import { toggleTheme } from "../Redux/slices/themeSlice";
import { useTranslation } from "react-i18next";
import { toggleLanguage } from "../Redux/slices/i18nSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.authR);
  const { theme } = useSelector((state) => state.themeR);

  const { t } = useTranslation("header");
  const { language } = useSelector((state) => state.i18nR);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLangToggle = () => {
    const lang = language === "en" ? "ar" : "en";
    dispatch(toggleLanguage(lang));
  };

  return (
    <>
      <nav
        className="navbar navbar-expand navbar-dark px-4 mb-4"
        dir={language === "en" ? "ltr" : "rtl"}
      >
        <div className="container-fluid">
          <Link
            to="/home"
            className="navbar-brand mb-0 fw-bold text-decoration-none text-white"
          >
            <span className="OrangeColor">Tech</span>News
          </Link>

          <div className="navbar-nav me-auto ms-4 align-items-center">
            <NavLink className="nav-link fw-semibold" to="/home">
              {t("Home")}
            </NavLink>

            <NavLink className="nav-link fw-semibold" to="/addpost">
              {t("Add Post")}
            </NavLink>
          </div>

          <div className="d-flex align-items-center ms-3">
            <button
              className="btn btn-sm btn-outline-light fw-bold"
              onClick={handleLangToggle}
            >
              {language === "en" ? "العربية" : "EN"}
            </button>

            <button
              className="btn btn-outline-light me-4 border-0 "
              onClick={handleThemeToggle}
            >
              {theme === "light" ? (
                <i className="bi bi-moon-fill"></i>
              ) : (
                <i className="bi bi-sun-fill"></i>
              )}
            </button>

            {currentUser ? (
              <>
                <span className="text-light me-3 fw-bold">
                  {t("Hi")}, {currentUser.name}!
                </span>
                <button
                  className="btn btn-outline-light"
                  onClick={handleLogout}
                >
                  {t("Logout")}
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="nav-link text-light fw-semibold me-3"
                >
                  {t("Login")}
                </Link>
                <Link to="/signup" className="btn btn-outline-warning fw-bold">
                  {t("Create Account")}
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
