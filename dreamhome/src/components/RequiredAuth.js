import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  if (!auth.isLoggedin) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default RequiredAuth;
