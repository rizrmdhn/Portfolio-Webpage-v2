import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import Location from "./Location";
import "./styles/styles.css";

export default function HeaderPage() {
  const [isOpen, setOpen] = useState(false);

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
            className="menu"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
            aria-controls="offcanvasMenu"
            onClick={Animate}
          >
            <Hamburger toggled={isOpen} toggle={setOpen} />
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
