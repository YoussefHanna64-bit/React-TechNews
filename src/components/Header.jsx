import { useContext } from "react";
import "../styles/Header.css";
import { AuthContextConfig } from "../context/AuthContext";
import { Link, NavLink, useNavigate } from "react-router";

const Header = () => {
  const { logout, currentUser } = useContext(AuthContextConfig);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark px-4 mb-4">
        <div className="container-fluid">
          <Link
            to="/home"
            className="navbar-brand mb-0 fw-bold text-decoration-none text-white"
          >
            <span className="OrangeColor">Tech</span>News
          </Link>

          <div className="navbar-nav me-auto ms-4 align-items-center">
            <NavLink className="nav-link fw-semibold" to="/home">
              Home
            </NavLink>

            <NavLink className="nav-link fw-semibold" to="/addpost">
              Add Post
            </NavLink>
          </div>

          <div className="d-flex align-items-center ms-3">
            {currentUser ? (
              <>
                <span className="text-light me-3 fw-bold">
                  Hi, {currentUser.name}!
                </span>
                <button
                  className="btn btn-outline-light"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="nav-link text-light fw-semibold me-3"
                >
                  Log in
                </Link>
                <Link to="/signup" className="btn btn-outline-warning fw-bold">
                  Create account
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
