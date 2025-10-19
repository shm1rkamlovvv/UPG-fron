import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    const checkAccess = async () => {
      if (!token) return setAuthorized(false);
      try {
        const decoded = jwtDecode(token);
        const user = await axios.get(`https://upg-zu5r.onrender.com/users/${decoded.id}`);
        if (user.data.role[0] === "admin") setAuthorized(true);
        else setAuthorized(false);
      } catch (error) {
        setAuthorized(false);
      }
    };
    checkAccess();
  }, [token]);

  if (authorized === null) return null; // yoki loader chiqarsang ham bo‘ladi
  if (!authorized) return <Navigate to="/auth" replace />;
  return children;
};

export default ProtectedRoute;
