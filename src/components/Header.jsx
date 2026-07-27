import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
import logo from "../assets/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 
  const navigate = useNavigate(); 

  
  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();

    if (query === "ghapama" || query === "gapama" || query === "хапама" || query === "гапама") {
      setIsMenuOpen(false);
      navigate("/ghapama");
      setSearchQuery("");
    } else if (query === "recipes" || query === "recetas" || query === "рецепты") {
      setIsMenuOpen(false);
      navigate("/recipes");
      setSearchQuery("");
      } else if (query === "xash" || query === "hash" || query === "хаш") {
       setIsMenuOpen(false);
       navigate("/xash");
       setSearchQuery("");

    }
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <NavLink to="/" className="header-logo">
          <img src={logo} alt="Siranush's Kitchen" className="logo-img" />
          <span>Siranush's Kitchen</span>
        </NavLink>

       
        <button
          className={`burger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        
        <div className={`header-actions ${isMenuOpen ? "active" : ""}`}>
          
          
          <form onSubmit={handleSearch} className="header-search">
            <input 
              type="text" 
              placeholder="Buscar recetas..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn" aria-label="Buscar">
              🔍
            </button>
          </form>

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
