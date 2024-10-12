import { NavLink } from "react-router-dom";

export function NavBar() {
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
        to="/about"
        className={(args) => (args.isActive ? "active" : "")}
      >
        About
      </NavLink>
    </nav>
  );
}
