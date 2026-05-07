import { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../Redux/slices/authSlice.js";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(login(loginState));

    if (res.payload) {
      toast.success("Welocome back to TechNews!");
      navigate("/home");
    } else {
      toast.error("Invalid email or password");
    }

    setLoginState({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row w-100 justify-content-center">
          <div className="col-11 col-md-6 col-lg-5">
            <h3 className="text-center mb-4 fw-bold">
              Welcome Back to
              <Link to="/home" className="text-decoration-none ms-2 text-black">
                <span className="OrangeColor">Tech</span>News
              </Link>
            </h3>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Email address"
                value={loginState.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                className="form-control mb-3"
                placeholder="Password"
                value={loginState.password}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="btn btn-warning w-100 text-white fw-bold"
              >
                Login
              </button>
            </form>

            <div className="text-center mt-3">
              <small className="text-muted">
                Don't have an account?
                <Link to="/signup" className="OrangeColor text-decoration-none">
                  Sign up
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
