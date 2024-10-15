import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../context/sessionContext";

export function NavBar() {
  const { isLoggedIn, setIsLoggedIn, username, setUsername } = useContext(SessionContext);

  const navigate = useNavigate();
  const logout = () => {
    navigate("/login", {
      replace: true,
    });

    setIsLoggedIn(false);
    setUsername('')
  };

  return (
    <nav>
      <NavLink to="/" className={(args) => (args.isActive ? "" : "")}>
        <img
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/apple_logo_icon_169566.png"
          width={20}
        />
      </NavLink>
      <NavLink to="/" className={(args) => (args.isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/search"
        className={(args) => (args.isActive ? "active" : "")}
      >
        Search
      </NavLink>
      <NavLink
        to="/products/1"
        className={(args) => (args.isActive ? "active" : "")}
      >
        Products
      </NavLink>
      <NavLink
        to="/logout"
        className={(args) => (args.isActive ? "active" : "")}
        id="logout"
        onClick={logout}
      >
        Logout
      </NavLink>
      <NavLink
        to="/login"
        className={(args) =>
          `${args.isActive ? "active" : ""} ${isLoggedIn ? "green-text" : ""}`
        }
      >
        Login
      </NavLink>
      <a id="username">{username}</a>
    </nav>
  );
}
