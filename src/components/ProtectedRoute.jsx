import React, { Component } from "react";
import { Navigate, Route } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { auth } from "../database/firebase-config";

function ProtectedRoute( {isAuth: isAuth, component: Component, ...rest }) {
  return (

<Route
    {...rest}
      render ={(props) => {

          if (isAuth) {
            return <Component/>;
          } 
          else {
            return(
              <Navigate to = {{pathname:"/donation", states: {from: props.location}}}/>
            );
          }

        }
      }
/>  

  );
}

export default ProtectedRoute;