import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-4">
      <div className="container ">
        <NavLink className="navbar-brand display-3" to="/">
          <i class="fas fa-book-open fa-3x"></i>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink className="nav-link display-4" exact to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link display-4 " exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link display-4 " exact to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="btn btn-outline-dark" to="/users/add">
          ADD USERS
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
