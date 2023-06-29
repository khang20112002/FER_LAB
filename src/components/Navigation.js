import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <div className="Header">
          <div className="headerMenu">
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/News`}>News</Link>
            </li>
            <li>
            <Link to={`/About`}>About</Link>
            </li>
            <li>
            <Link to={`/Contact`}>Contact</Link>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}
