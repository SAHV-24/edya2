import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { SessionContext } from "../context/sessionContext";

export function PrivateRoutes() {
  const { isLoggedIn } = useContext(SessionContext);

  const {pathname, search} = useLocation()
  localStorage.setItem('lastPath',`${pathname}${search}`)

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
