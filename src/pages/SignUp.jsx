import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import User from "../models/UserModel.js";
import { AuthContextConfig } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

const SignUp = () => {
  const { signup } = useContext(AuthContextConfig);
  const navigate = useNavigate();

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
      toast.error("Name must be at least 3 chars");
      return;
    }

    if (signUpState.password.length < 8) {
      toast.error("Password must be at least 8 chars");
      return;
    }

    if (signUpState.password !== signUpState.confirmPassword) {
      toast.error("Passwords dosen't match");
      return;
    }

    const usr = new User(
      signUpState.name,
      signUpState.email,
      signUpState.password,
    );

    const res = await signup(usr);

    if (res) {
      toast.success("Welocome to TechNews!");
      navigate("/home");
    } else {
      toast.error("Failed to create account, please try again");
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
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row w-100 justify-content-center">
          <div className="col-11 col-md-6 col-lg-5">
            <h3 className="text-center mb-4 fw-bold">
              Join the
              <Link to="/home" className="text-decoration-none mx-2 text-black">
                <span className="OrangeColor">Tech</span>News
              </Link>
              Community
            </h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder="Full name"
                value={signUpState.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Email address"
                value={signUpState.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                className="form-control mb-3"
                placeholder="Password"
                value={signUpState.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                className="form-control mb-3"
                placeholder="Confirm Password"
                value={signUpState.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="btn btn-warning w-100 text-white fw-bold"
              >
                Sign Up
              </button>
            </form>

            <div className="text-center mt-3">
              <small className="text-muted">
                Already have an account?
                <Link to="/login" className="OrangeColor text-decoration-none ">
                  Login
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
