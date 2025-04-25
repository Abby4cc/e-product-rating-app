import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg shadow py-3" style={{ backgroundColor: '#e6d7ff' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-dark fs-4" to="/">E-PRODUCT RATE</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark fw-medium" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark fw-medium" to="/products">Products</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark fw-medium" to="/submit-review">Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;