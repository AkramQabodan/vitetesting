import { NavLink } from "react-router-dom";
import "./index.scss";
const NavBar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <nav>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to={"/login"}
      >
        login
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to={"/list"}
      >
        List
      </NavLink>
    </nav>
  );
};
export default NavBar;
