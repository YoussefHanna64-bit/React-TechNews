import { lazy, Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import AuthContext from "./context/AuthContext";
import AuthLayout from "./layouts/AuthLayout";
import PostContext from "./context/PostContext";

const routerCofig = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  { path: "*", element: <Navigate to="/home" replace /> },
]);

function App() {
  return (
    <>
      <AuthContext>
        <PostContext>
          <Suspense
            fallback={
              <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-warning" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            }
          >
            <RouterProvider router={routerCofig}></RouterProvider>
          </Suspense>
        </PostContext>
      </AuthContext>
    </>
  );
}

export default App;
