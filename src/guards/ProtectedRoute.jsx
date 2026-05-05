import { useContext } from "react";
import { AuthContextConfig } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const { currentUser } = useContext(AuthContextConfig);

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
