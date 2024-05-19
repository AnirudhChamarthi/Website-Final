// following tutorial by Brian Design
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./anirudh-eagle.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [setButton] = useState(true);

  const windowShrinker = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    }
    else {
      setButton(true)
    }
  }
  window.addEventListener("resize", windowShrinker)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} height="20" /> Anirudh
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-dragon" : "fas fa-bars"} />
            </div>
            <div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="https://www.youtube.com/channel/UCNfaiPEWMLbK4oiKFMTWCDw" className="nav-links" onClick={closeMobileMenu}>Youtube</Link>
              </li>
              <li className="nav-item">
                <Link to="https://github.com/AnirudhChamarthi" className="nav-links" onClick={closeMobileMenu}>GitHub</Link>
              </li>
              <li className = "nav-item">
                <Link to="./Contact.js" className = "nav-links" onClick = {closeMobileMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;