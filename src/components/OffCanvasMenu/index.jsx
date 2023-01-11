import React from "react";
import { Link } from "react-router-dom";

export default function OffCanvasMenu({ CloseMenu }) {
  return (
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
              <button
                className="link-button"
                data-bs-dismiss="offcanvas"
                onClick={CloseMenu}
              >
                About
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Project">
              <button
                className="link-button"
                data-bs-dismiss="offcanvas"
                onClick={CloseMenu}
              >
                Project
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Experience">
              <button
                className="link-button"
                data-bs-dismiss="offcanvas"
                onClick={CloseMenu}
              >
                Experience
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Social">
              <button
                className="link-button"
                data-bs-dismiss="offcanvas"
                onClick={CloseMenu}
              >
                Social
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
