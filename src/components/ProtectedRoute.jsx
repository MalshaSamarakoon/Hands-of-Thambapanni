import React, { Component } from "react";
import { Navigate, Route, Outlet } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { auth } from "../database/firebase-config";
import Login from "./Login";

const ProtectedRoute = (props) => {
  const { user } = useUserAuth();
  if (user) {
    return <>{props.children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};
export default ProtectedRoute;
