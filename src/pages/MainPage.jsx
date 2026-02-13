import { useState } from "react";
import { Button } from "react-bootstrap";

import "../style/Style.css";
import ventasicon from "../assets/ventas.png";
import editicon from "../assets/edit.png";
import balanceicon from "../assets/balance.png";
import { NavLink } from "react-router-dom";

export default function MainPage({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="general">
      {/* FLECHA SIEMPRE VISIBLE */}
      <div
        className={`toggle-btn ${open ? "open" : "closed"}`}
        onClick={() => setOpen(!open)}
      >
        {open ? "X" : "."}
      </div>

      {/* ASIDE */}
      <div className={`aside ${open ? "open" : "closed"}`}>
        <div className="botones">
          <NavLink
            to="/ventas"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <button    className={({ isActive }) => (isActive ? "active-link" : "")}>
              <img src={ventasicon} />
            </button>
          </NavLink>
          <NavLink
            to="/edicion"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <button>
              <img src={editicon} />
            </button>
          </NavLink>
          <NavLink
            to="/balance"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <button>
              <img src={balanceicon} />
            </button>
          </NavLink>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
