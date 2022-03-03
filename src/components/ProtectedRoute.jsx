import React, { Component } from "react";
import { Navigate, Route, Outlet } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { auth } from "../database/firebase-config";
import Login from "./Login";

// function ProtectedRoute( {isAuth: isAuth, component: Component, ...rest }) {
//   return (

// <Route
//     {...rest}
//       render ={(props) => {

//           if (isAuth) {
//             return <Component/>;
//           } 
//           else {
//             return(
//               <Navigate to = {{pathname:"/donation", states: {from: props.location}}}/>
//             );
//           }

//         }
//       }
// />  

//   );
// }

// export default ProtectedRoute;



const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;