import { lazy, Suspense, useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import "./App.css";
const Home = lazy(() => import("../pages/Home"));
const AddPost = lazy(() => import("../pages/AddPost"));
const PostDetails = lazy(() => import("../pages/PostDetails"));
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "../guards/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const routerCofig = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "post/:id",
        element: <PostDetails />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "addpost",
            element: <AddPost />,
          },
        ],
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
  const { theme } = useSelector((state) => state.themeR);
  const { language } = useSelector((state) => state.i18nR);
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <>
      <Toaster />
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
    </>
  );
}

export default App;
