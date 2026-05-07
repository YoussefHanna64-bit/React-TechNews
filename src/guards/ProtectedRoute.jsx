import { Navigate, Outlet } from "react-router";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { currentUser } = useSelector((state) => state.authR);

  if (!currentUser) {
    toast.error("You must be logged in to add posts");
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
