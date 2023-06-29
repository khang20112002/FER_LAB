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
              <Link to={`/Home`}>Home</Link>
            </li>
            <li>
              <Link to={`/`}>News</Link>
            </li>
            <li>
            <Link to={`/`}>About</Link>
            </li>
            <li>
            <Link to={`/`}>Contact</Link>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}
