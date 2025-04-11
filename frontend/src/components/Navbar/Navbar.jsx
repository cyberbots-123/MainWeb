import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { assets } from '../../assets/assets';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Navbar.css";

const Navbar = () => {
  const [navState, setNavState] = useState({ isOpen: false, isScrolled: false });

  useEffect(() => {
    const handleScroll = () => {
      setNavState((prev) => ({ ...prev, isScrolled: window.scrollY > 50 }));
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${navState.isScrolled ? 'bg-light shadow-sm' : 'bg-white'} fixed-top`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="nav_logo" src={assets.logo} alt="Company Logo" loading="lazy" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={navState.isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={() => setNavState((prev) => ({ ...prev, isOpen: !prev.isOpen }))}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navState.isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Why Cyberbots
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/aboutus">About Us</Link></li>
                {/* <li><Link className="dropdown-item" to="/events">Events</Link></li> */}
                <li><Link className="dropdown-item" to="/career">Career</Link></li>
                <li><Link className="dropdown-item" to="/contactus">Contact Us</Link></li>
                <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
              </ul>
            </li>
          </ul>
          {/* <button className="btn btn-outline-primary">
            Login / Sign Up
          </button> */}
          <Link to="/login" className="custom-btn">
  Login / Sign Up
</Link>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
