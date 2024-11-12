//import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About Us
      </NavLink>
      <NavLink
        to="/team"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Our Team
      </NavLink>
      <NavLink
        to="/resources"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Resources
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default NavBar;
