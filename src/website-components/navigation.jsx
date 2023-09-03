import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link
          style={{
            fontFamily: 'Brush Script MT, cursive',
            fontSize: '28px',
            fontWeight: 'bold'
          }}
          className="navbar-brand"
          to="/"
        >
          FS Motors
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/services"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/about/ceo-message">
                    CEO Message
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/service3">
                    Option 3
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            {/* Add the "Sign In" menu option */}
            <li className="nav-item">
              <Link className="nav-link" to="/sign-in">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
