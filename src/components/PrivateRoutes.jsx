import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const token = localStorage.getItem("token");
  let auth = { token };
  return auth.token ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoutes;
