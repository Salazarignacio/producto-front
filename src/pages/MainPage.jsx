import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/Style.css";
import ventasicon from "../assets/ventas.png";
import editicon from "../assets/edit.png";
import balanceicon from "../assets/balance.png";
import { NavLink } from "react-router-dom";

export default function MainPage({ children }) {
  const [open, setOpen] = useState(true);

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
            <Button>
              <img src={ventasicon} />
            </Button>
          </NavLink>
          <NavLink
            to="/edicion"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <Button>
              <img src={editicon} />
            </Button>
          </NavLink>
          <NavLink
            to="/balance"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <Button>
              <img src={balanceicon} />
            </Button>
          </NavLink>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
