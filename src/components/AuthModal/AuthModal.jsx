import { useState } from "react";
import { Link } from "react-router-dom";
import authModalImage from "../../assets/authModalBg.jpg";
import authDesktopImage from "../../assets/auth-modal.jpg"; 

export default function AuthModal({
  onClose,
  credentials,
  error,
  onChange,
  onSubmit,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-overlay">
     
      <div className="auth-mobile-bg">
        <img src={authModalImage} alt="Background Mobile" />
      </div>

      <div className="auth-modal">
      
        <div className="auth-modal__left">
          <img src={authDesktopImage} alt="El Legado de Siranush" />
        </div>

       
        <div className="auth-modal__right">
          <button className="auth-modal__close" onClick={onClose}>
            ×
          </button>

          <h2 className="auth-modal__title auth-modal__title--desktop">
            Bienvenido a Nuestra Mesa
          </h2>
          <p className="auth-modal__subtitle auth-modal__subtitle--desktop">
            Descubre recetas auténticas y tradiciones familiares.
          </p>

          <form className="auth-modal__form" onSubmit={onSubmit}>
            {error && (
              <p className="error-message" style={{ color: "red" }}>
                {error}
              </p>
            )}

            <div className="form-group">
              <label>Correo Electrónico</label>
              <input
                type="texto"
                name="username"
                placeholder="Barev@Armenia.com"
                value={credentials?.username || ""}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={credentials?.password || ""}
                  onChange={onChange}
                  required
                />
                <span
                  className="password-toggle-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  👁
                </span>
              </div>
            </div>

            <button type="submit" className="login-btn">
              Iniciar Sesión →
            </button>
          </form>

          <div className="auth-modal__footer">
            <p>¿Aún no tienes cuenta?</p>
            <Link to="/register" className="register-link-btn">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
