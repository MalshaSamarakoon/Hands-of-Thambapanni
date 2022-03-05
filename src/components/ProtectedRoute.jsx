import React, { useState, useEffect } from "react";
import { Navigate, Route, Outlet } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { auth } from "../database/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) return null;

  if (user) {
    return <>{props.children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};
export default ProtectedRoute;
