import { useEffect } from "react";
import { useAppSelector } from "../features/app/store";
import { selectIsAuthenticated } from "../features/auth/authSlice";
import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedLayout = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return <>{isAuthenticated ? <Outlet /> : null}</>;
};
