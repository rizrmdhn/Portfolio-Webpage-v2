import React from "react";
import { Link, useLocation } from "react-router-dom";
import Location from "./Location";
import "./styles/styles.css";

export default function HeaderPage() {
  const location = useLocation();
  return (
    <div className="Header">
      <div className="header-item">
        <div className="location">
          <Location location={location.pathname} />
        </div>
        <div className="menu-button">
          <button
            className="menu hamburger bi bi-list text-end"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
            aria-controls="offcanvasMenu"
          ></button>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenu"
        data-bs-backdrop="false"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasMenu">
            Menu
          </h5>
          <button
            type="button"
            className="bi bi-x-lg"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
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
