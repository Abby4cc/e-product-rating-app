import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg  shadow" style={{ backgroundColor: '#e6d7ff' }}>"
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-dark" to="/">E-Product Rate</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-dark" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/submit-review">Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
