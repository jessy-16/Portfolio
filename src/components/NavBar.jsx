import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">JK</div>

        <ul className="nav-links">
  <li>
    <NavLink to="/">Home</NavLink>
  </li>
  <li>
    <NavLink to="/projects">Projects</NavLink>
  </li>
  <li>
    <NavLink to="/about">About</NavLink>
  </li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <button className="theme-toggle" onClick={toggleTheme}>
          <span className={`icon ${dark ? "moon" : "sun"}`}></span>
        </button>
      </div>
    </nav>
  );
}