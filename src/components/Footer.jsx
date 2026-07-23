import React from "react";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src={logo}
            alt="Siranush's Kitchen"
            className="footer-logo-img"
          />
          <h2 className="footer-logo">Siranush's Kitchen</h2>
        </div>

        {/* Короткая аккуратная линия из макета */}
        <hr className="footer-divider" />

        <p className="footer-copy">
          © 2026 La Cocina de Siranush. Tradiciones Armenias Artesanales.
        </p>
      </div>
    </footer>
  );
}
