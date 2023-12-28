import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function PrivateRoutes() {
    const navigate = useNavigate();
  const token = localStorage.getItem("user");
  let auth = token ? JSON.parse(token) : null;

  return auth && auth.token ? <Outlet /> : <navigate to="/sign-in" />;
}

export default PrivateRoutes;


