import React from "react";
import { Link } from "react-router-dom";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <span>
        <Link className="navbar-brand" to="/home">
          Vidly{" "}
        </Link>
        <Link className="navbar-secondary m-2" to="/movies">
          Movies
        </Link>
        <Link className="navbar-secondary m-2" to="/customers">
          Customers
        </Link>
        <Link className="navbar-secondary m-2" to="/rentals">
          Rentals
        </Link>
      </span>
    </nav>
  );
};

export default NavBar;
