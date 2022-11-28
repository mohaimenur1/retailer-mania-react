/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-bg shadow-sm rounded">
        <div className="container">
          <Link to="/" className="navbar-brand fw-semibold">
            Retailer Mnia
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link fw-semibold"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/blog" className="nav-link fw-semibold">
                  Blog
                </Link>
              </li>
              {user?.uid ? (
                <>
                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link fw-semibold">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-semibold">
                      {user?.displayName}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={handleLogout}
                      className="btn nav-link fw-semibold"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="nav-link fw-semibold">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
