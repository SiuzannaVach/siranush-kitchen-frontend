import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import kenya from "../assets/kenya.jpg";
import patternCarpet from "../assets/pattern-carpet.jpg";
import bgAuthMobile from "../assets/bg-auth-mobile.jpg";


export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de registro:", formData);
  };

  // =========================================================
  
  // desktop=========================================================
  if (isDesktop) {
    return (
      <div className="register-page-desktop">
        <div className="register-visual" style={{ backgroundImage: `url(${patternCarpet})` }}>
          <div className="visual-desktop-content">
            <h1 className="main-title">Siranush's Kitchen</h1>
            <div className="book-container">
              <img src={kenya} alt="Libro de recetas" className="book-img" />
            </div>
            <div className="badge-text">
              <p className="badge-accent">Un legado en cada receta.</p>
              <p className="badge-sub">
                Nuestra cocina no es solo comida; es una historia de siglos, de
                manos que amasan con amor y corazones que encuentran hogar en la
                mesa. Bienvenidos a la familia.
              </p>
            </div>
          </div>
        </div>
    
        <div className="register-form-container">
          <div className="form-card">
            <p className="form-subtitle">Únete a Nuestra Familia</p>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="input-field">
                <label htmlFor="name-desktop">Tu Nombre</label>
                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    id="name-desktop"
                    name="name"
                    placeholder="Siranush"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-field">
                <label htmlFor="email-desktop">Correo Electrónico</label>
                <div className="input-wrapper">
                  <span className="input-icon">✉️</span>
                  <input
                    type="email"
                    id="email-desktop"
                    name="email"
                    placeholder="Barev@Armenia.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-field">
                <label htmlFor="password-desktop">Contraseña</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type="password"
                    id="password-desktop"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-submit">
                Crear Cuenta
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  
  // mobile=========================================================
  return (
    <div className="register-page-mobile">
      <div className="register-visual">
        <img
          src={bgAuthMobile}
          alt="Siranush's Kitchen"
          className="visual-mobile-img"
        />
      </div>

      <div className="register-form-container">
        <div className="form-card">
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-field">
              <label htmlFor="name-mobile">Tu Nombre</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name-mobile"
                  name="name"
                   placeholder="Siranush"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="email-mobile">Correo Electrónico</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email-mobile"
                  name="email"
                  placeholder="Barev@Armenia.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="password-mobile">Contraseña</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  id="password-mobile"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-submit">
              Crear cuenta <span className="btn-arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}