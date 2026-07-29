import { Link } from "react-router-dom";

import heroBg from "../assets/hero-bg.jpg";
import recipeXash from "../assets/recipe-xash.jpg";
import recipeDolma from "../assets/recipe-dolma.jpg";
import recipeGata from "../assets/recipe-gata.jpg";
import recipeGhapama from "../assets/recipe-ghapama.jpg";
import grandmaImg from "../assets/grandma.jpg";
import hero from "../assets/hero.jpg";
import dolma from "../assets/dolma.jpg";
import gata from "../assets/gata.jpg";
import xash from "../assets/xash.jpg";
import bookIcon from "../assets/icon.svg";

function HomeMobile() {
  return (
    <div className="home-page-mobile">
      <div className="hero-image-box-mobile">
        <img
          src={hero}
          alt="La Cocina de Siranush"
          className="hero-img-mobile"
        />
      </div>

      <div className="hero-container-mobile">
        <div className="hero-content-mobile">
          <p className="hero-text-mobile" style={{ marginBottom: "40px" }}>
            Entra a mi cocina en Armenia, donde cada especia cuenta una historia
            y cada plato es un pedazo de nuestra herencia armenia.
          </p>
          <div className="hero-actions-mobile" style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "0 20px", marginBottom: "40px" }}>
            <Link to="/recipes" className="btn-primary" style={{ textAlign: "center" }}>
              Explorar Recetas
            </Link>
            <Link to="/login" className="btn-secondary" style={{ textAlign: "center" }}>
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>

      <div className="recipes-grid-mobile">
        {/* 1. Dolma de Verano */}
        <div className="recipe-card-mobile">
          <div className="card-image-box-mobile">
            <img src={dolma} alt="Dolma" />
          </div>
          <div className="card-content-mobile">
            <h3 className="card-title-mobile">Dolma de Verano</h3>
            <p className="card-text-mobile">
              "Recuerdo el olor de las hojas de parra frescas recogiéndolas de
              la vid en el jardín . Cada envoltura es una oración silenciosa por
              la familia."
            </p>
            <Link to="/dolma" className="card-link-mobile btn-dolma-mobile">
              Ver Receta
            </Link>
          </div>
        </div>

        {/* 2. Gata de Pueblo */}
        <div className="recipe-card-mobile">
          <div className="card-image-box-mobile">
            <img src={gata} alt="Gata" />
          </div>
          <div className="card-content-mobile">
            <h3 className="card-title-mobile">Gata de Pueblo</h3>
            <p className="card-text-mobile">
              "La corteza dorada esconde un corazón de mantequilla y azúcar. Era
              el centro de atención de cada mesa festiva en el pueblo."
            </p>
            <Link to="/gata" className="card-link-mobile btn-gata-mobile">
              Ver Receta
            </Link>
          </div>
        </div>

        {/* 3. Xash Tradicional */}
        <div className="recipe-card-mobile">
          <div className="card-image-box-mobile">
            <img src={recipeXash} alt="Xash" />
          </div>
          <div className="card-content-mobile">
            <h3 className="card-title-mobile">Xash Tradicional</h3>
            <p className="card-text-mobile">
              "Un reconfortante para el alma en las mañanas de invierno. Nos
              reunimos antes del amanecer, triturando ajo y compartiendo pan
              mientras las mountains duermen."
            </p>
            <Link to="/xash" className="card-link-mobile btn-xash-mobile">
              Ver Receta
            </Link>
          </div>
        </div>
      </div>

      {/*  Registrarse  */}
      <div className="subscribe-section-mobile">
        <div className="subscribe-container-mobile">
          <div className="subscribe-box-mobile">
            
            <div
              className="subscribe-icon-box"
              style={{ textAlign: "center", marginBottom: "16px" }}
            >
              <img
                src={bookIcon}
                alt="Book Icon"
                style={{ width: "40px", height: "40px" }}
              />
            </div>

            <h2
              className="subscribe-title-mobile"
              style={{
                textAlign: "center",
                color: "#6B231A",
                marginBottom: "24px",
                fontSize: "28px",
                fontFamily: "serif",
              }}
            >
              Registrarse
            </h2>
            <form
              className="subscribe-form-mobile"
              onSubmit={(e) => e.preventDefault()}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "320px",
                margin: "0 auto",
              }}
            >
              <input
                type="email"
                placeholder="Barev@Armenia.com"
                className="subscribe-input-mobile"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              />
              <button
                type="submit"
                className="subscribe-btn-mobile"
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#6B231A",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeDesktop() {
  return (
    <div className="home-page">
      <main>
        <section
          className="hero-section"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="container hero-container">
            <div className="hero-content">
              <span className="hero-subtitle">
                SABORES TRADICIONALES ARMENIOS
              </span>
              <h1 className="hero-title">
                La Cocina de Siranush:
                <br />
                Sabores de Nuestra Herencia
              </h1>
              <p className="hero-text">
               "El aroma de la infancia y los secretos compartidos junto al fuego. Aquí, las recetas de Siranush cobran vida en cada grano de granada. Descubre un lugar mágico para atesorar, estructurar y transmitir los sabores más puros de nuestra raíz armenia.
              </p>
              <div className="hero-actions">
                <Link to="/recipes" className="btn-primary">
                  Explorar Recetas
                </Link>
                <Link to="/login" className="btn-secondary">
                  Iniciar Sesión
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="recipes-section">
          <div className="recipes-container">
            <h2 className="section-title-center">Recetas Tradicionales</h2>
            <p className="section-subtitle-center">
              Platos seleccionados de nuestros archives familiares, cada uno
              llevando el peso de generations.
            </p>
            <div className="recipes-grid">
              <div className="recipe-card media-card">
                <div className="card-image-box">
                  <img src={xash} alt="El Ritual del Xash" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">El Ritual del Xash</h3>
                  <p className="card-text">
                    "La abuela se despertaba antes del amanecer, la cocina ya
                    estava caliente..."
                  </p>
                  <Link to="/xash" className="card-link">
                    Ver Receta &rarr;
                  </Link>
                </div>
              </div>
              <div className="recipe-card media-card">
                <div className="card-image-box">
                  <img src={recipeDolma} alt="Dolma de Verano" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Dolma de Verano</h3>
                  <p className="card-text">
                    "Un trabajo de amor que me enseñó paciencia: cada hoja,un
                    secreto guardado."
                  </p>
                  <Link to="/dolma" className="card-link">
                    Ver Receta &rarr;
                  </Link>
                </div>
              </div>
              <div className="recipe-card media-card">
                <div className="card-image-box">
                  <img src={recipeGata} alt="Gata de Pueblo" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Gata de Pueblo</h3>
                  <p className="card-text">
                    "El aroma de vainilla y mantequilla que daba la bienvenida a
                    cada invitado en casa."
                  </p>
                  <Link to="/gata" className="card-link">
                    Ver Receta &rarr;
                  </Link>
                </div>
              </div>
              <div className="recipe-card media-card">
                <div className="card-image-box">
                  <img src={recipeGhapama} alt="Cosecha de Ghapama" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Cosecha de Ghapama</h3>
                  <p className="card-text">
                    "¡Hey Jan Ghapama! La canción que cantábamos mientras la
                    cocina se llenaba del aroma a miel y frutas secos."
                  </p>
                  <Link to="/ghapama" className="card-link">
                    Ver Receta &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="roots-section">
          <div className="roots-container">
            <div className="roots-image-box">
              <img src={grandmaImg} alt="Las Raíces de Masis" />
            </div>
            <div className="roots-content">
              <h2 className="section-title">Las Raíces de Masis</h2>
              <p className="roots-text">
                La cocina armenia no se trata solo de ingredientes; es un
                archivo vivo de resistencia y hospitalidad. En la cocina de
                Siranush, creemos que una receta es un mapa, que nos lleva de
                vuelta a las altas mesetas de Ararat y a los bulliciosos
                mercados de Armenia.
              </p>
              <Link to="/recipes" className="recipe-btn-link">
                <button className="recipe-btn">
                  Ver Recetas
                  <svg
                    className="recipe-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="subscribe-section">
          <div className="subscribe-container">
            <div className="subscribe-box">
              <h2 className="subscribe-title">Registrarse</h2>
              <form
                className="subscribe-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Barev@Armenia.com"
                  className="subscribe-input"
                  required
                />
                <button type="submit" className="subscribe-btn">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HomeMobile />
      <HomeDesktop />
    </>
  );
}
