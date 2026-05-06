import { useContext } from "react";
import { AuthContextConfig } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";
import toast from "react-hot-toast";

const ProtectedRoute = () => {
  const { currentUser } = useContext(AuthContextConfig);

  if (!currentUser) {
    toast.error("You must be logged in to add posts");
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
