// Navigation.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSS/Navigation.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ExPerience from './ExPerience';

function Navigation() {
  const location = useLocation();
  
  // Optional: highlight active link
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="portfolio-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">

          {/* Brand / Logo */}
          <Link className="navbar-brand fw-bold fs-4" to="/">
            <span className="text-primary">H</span>arshal &nbsp;
             <span className="text-primary">P</span>atil
          </Link>

          {/* Hamburger button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#portfolioNavbar"
            aria-controls="portfolioNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible menu */}
          <div className="collapse navbar-collapse" id="portfolioNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/')}`} to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/Exerience')}`} to="/ExPerience">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/Education')}`} to="/Education">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/Achievements')}`} to="/Achievements">
                  Achievements
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/Projects')}`} to="/Projects">
                  Projects
                </Link>
              </li>
             
            </ul>

            {/* Optional: extra button / social quick link */}
            
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;