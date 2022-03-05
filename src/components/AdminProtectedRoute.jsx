import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../database/firebase-config";
import { doc, getDoc } from "@firebase/firestore";

const AdminProtectedRoute = (props) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(async () => {
    if (user && user.uid) {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserRole(docSnap.data().Role);
      } else {
        setUserRole(null);
      }
      setLoading(false);
    }
  }, [user]);

  if (loading) return null;
  if (user && userRole === "ADMIN") {
    return <>{props.children}</>;
  } else {
    return <Navigate to="/" />;
  }
};
export default AdminProtectedRoute;
