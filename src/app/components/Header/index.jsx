'use client';
import { useState } from "react";
import "./header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo" onClick={closeMenu}>Axmatov Olimxon</div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#" onClick={closeMenu}>Home</a>
        <a href="#" onClick={closeMenu}>Portfolio</a>
        <a href="#" onClick={closeMenu}>Contact</a>
      </nav>

      <div className={`burger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
