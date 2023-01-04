import React from "react";
import { Link, useLocation } from "react-router-dom";
import Location from "./Location";
import "./styles/styles.css";

export default function HeaderPage() {
  const Animate = () => {
    // Look for .hamburger
    var hamburger = document.getElementById("hamburger-menu");
    hamburger.classList.toggle("is-active");
  };

  const location = useLocation();
  return (
    <div className="Header">
      <div className="header-item animate__animated animate__fadeIn">
        <div className="location">
          <Location location={location.pathname} />
        </div>
        <div className="menu-button">
          <button
            id="hamburger-menu"
            className="menu hamburger hamburger--collapse"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
            aria-controls="offcanvasMenu"
            onClick={Animate}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenu"
        data-bs-backdrop="false"
      >
        <div className="offcanvas-body text-start">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Project">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Experience">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Social">
                Social
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
