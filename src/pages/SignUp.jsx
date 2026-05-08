import { useState } from "react";
import { Link, useNavigate } from "react-router";
import User from "../models/UserModel.js";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../Redux/slices/authSlice.js";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation("signup");
  const { language } = useSelector((state) => state.i18nR);

  const [signUpState, setSignUpState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setSignUpState({ ...signUpState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signUpState.name.trim().length < 3) {
      toast.error(t("Name must be at least 3 chars"));
      return;
    }

    if (signUpState.password.length < 8) {
      toast.error(t("Password must be at least 8 chars"));
      return;
    }

    if (signUpState.password !== signUpState.confirmPassword) {
      toast.error(t("Passwords dosen't match"));
      return;
    }

    const usr = new User(
      signUpState.name,
      signUpState.email,
      signUpState.password,
    );

    const res = await dispatch(signup(usr));

    if (res.payload) {
      toast.success(t("Welcome to TechNews!"));
      navigate("/home");
    } else {
      toast.error(t("Failed to create account, please try again"));
    }

    setSignUpState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center vh-100"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="row w-100 justify-content-center">
          <div className="col-11 col-md-6 col-lg-5">
            <h3 className="text-center mb-4 fw-bold">
              {t("Join the")}
              <Link to="/home" className="text-decoration-none mx-2 text-black">
                <span className="OrangeColor">Tech</span>News
              </Link>
              {t("Community")}
            </h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className="mb-3 w-100"
                placeholder={t("Full name")}
                value={signUpState.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                className="mb-3 w-100"
                placeholder={t("Email address")}
                value={signUpState.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                className="mb-3 w-100"
                placeholder={t("Password")}
                value={signUpState.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                className="mb-3 w-100"
                placeholder={t("Confirm Password")}
                value={signUpState.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="btn btn-warning w-100 text-white fw-bold"
              >
                {t("Sign Up")}
              </button>
            </form>

            <div className="text-center mt-3">
              <small className="text-muted">
                {t("Already have an account?")}
                <Link to="/login" className="OrangeColor text-decoration-none ">
                  {t("Login")}
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
