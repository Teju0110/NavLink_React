import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <h1>My Website</h1>
      </div>
      <div className="navBarItems">
        <ul>
          <li>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={{ textDecoration: "none" }}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={{ textDecoration: "none" }}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="login">
        <h3>Login / SignUp</h3>
      </div>
    </div>
  );
};

export default NavBar;
