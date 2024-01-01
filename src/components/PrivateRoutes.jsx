import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PrivateRoutes() {
  const navigate = useNavigate();
  const token = localStorage.getItem("user");
  let auth = token ? JSON.parse(token) : null;
  useEffect(() => {
    if (!auth) {
      navigate("/sign-in");
    }
  }, [auth, navigate]);
  return auth ? <Outlet /> : null;
}

export default PrivateRoutes;
