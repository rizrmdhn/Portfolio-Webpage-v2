import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import Location from "./Location";
import "./styles/styles.css";
import OffCanvasMenu from "../OffCanvasMenu";

export default function HeaderPage() {
  const [isOpen, setOpen] = useState(false);

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
          >
            <Hamburger toggled={isOpen} toggle={setOpen} size={34} />
          </button>
        </div>
      </div>
      <OffCanvasMenu CloseMenu={() => setOpen(!isOpen)} />
    </div>
  );
}
