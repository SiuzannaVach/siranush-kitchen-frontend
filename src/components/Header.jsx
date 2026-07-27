import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="header-container">
        <NavLink to="/" className="header-logo">
          <img src={logo} alt="Siranush's Kitchen" className="logo-img" />
          <span>Siranush's Kitchen</span>
        </NavLink>

        {/* Кнопка Бургер (видна только на мобильных) */}
        <button
          className={`burger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Навигация и Поиск */}
        <div className={`header-actions ${isMenuOpen ? "active" : ""}`}>
          <div className="header-search">
            <input type="text" placeholder="Buscar recetas..." />
            <button type="submit" className="search-btn" aria-label="Buscar">
              🔍
            </button>
          </div>

          <nav className="header-nav">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/recipes"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Recetas
            </NavLink>
            <NavLink
              to="/register"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Registrarse
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
