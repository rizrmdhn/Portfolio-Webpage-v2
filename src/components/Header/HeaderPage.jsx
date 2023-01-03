import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.css";

export default function HeaderPage() {
  return (
    <div className="Header text-end">
      <button
        className="menu hamburger bi bi-list"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      ></button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        data-bs-backdrop="false"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
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
