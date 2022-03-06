import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const AdminProtectedRoute = (props) => {
  const { user, userRole } = useUserAuth();

  if (user && userRole === "ADMIN") {
    return <>{props.children}</>;
  } else {
    return <Navigate to="/" />;
  }
};
export default AdminProtectedRoute;
