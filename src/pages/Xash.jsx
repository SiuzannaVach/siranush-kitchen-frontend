import React, { useState, useEffect } from 'react';
import dishXashMobile from '../assets/dish-xash-mobile.jpg';
import xashHero from '../assets/xash-hero.jpg'; 
import xashPrep from '../assets/xash-prep.jpg';

const Xash = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const mobileingredients = [
    { id: 1, name: "Patas de ternera", description: "4 unidades, meticulosamente limpias" },
    { id: 2, name: "Agua de manantial", description: "Cantidad suficiente para cubrir y renovar" },
    { id: 3, name: "Ajo fresco", description: "3 cabezas, machacadas con sal" },
    { id: 4, name: "Lavash seco", description: "Para desmenuzar dentro del caldo" }
  ];

  const desktopIngredients = [
    { id: 1, name: "4 kg de patas de ternera", description: "(limpias y peladas)" },
    { id: 2, name: "Agua pura de manantial", description: "" },
    { id: 3, name: "4 cabezas de ajo", description: "(picadas finamente)" },
    { id: 4, name: "Lavash seco", description: "(en abundancia)" },
    { id: 5, name: "Rábano blanco fresco (daikon)", description: "" },
    { id: 6, name: "Sal gruesa", description: "(para servir)" }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 // mobile
  
  if (isMobile) {
    return (
      <div className="xash-page-wrapper">
        <div className="xash-mobile-hero">
          <img src={dishXashMobile} alt="Xash Mobile" className="xash-mobile-hero-img" />
          <h1 className="xash-mobile-title">Xash</h1>
        </div>
        <div className="xash-container">
          <div className="xash-header-info">
            <div className="info-item"><span>🕒</span><span>24 Horas</span></div>
            <div className="info-divider" />
            <div className="info-item"><span>👥</span><span>Para 6</span></div>
            <div className="info-divider" />
            <div className="info-item"><span>🔥</span><span>Nutritivo</span></div>
          </div>
          <h2 className="section-title">Ingredientes</h2>
          
          <div className="ingredients-list">
            <div className="ingredient-card">
              <h3 className="ingredient-name">Patas de ternera</h3>
              <p className="ingredient-desc">4 unidades, meticulosamente limpias</p>
            </div>
            <div className="ingredient-card">
              <h3 className="ingredient-name">Agua de manantial</h3>
              <p className="ingredient-desc">Cantidad suficiente para cubrir y renovar</p>
            </div>
            <div className="ingredient-card">
              <h3 className="ingredient-name">Ajo fresco</h3>
              <p className="ingredient-desc">3 cabezas, machacadas con sal</p>
            </div>
            <div className="ingredient-card">
              <h3 className="ingredient-name">Lavash seco</h3>
              <p className="ingredient-desc">Para desmenuzar dentro del caldo</p>
            </div>
          </div>
        </div>
      </div>
    );
  } 

  // desktop
  
  return (
    <div className="xash-page-wrapper desktop">
      <section className="xash-hero-section">
        <div className="xash-big-image">
          <img src={xashHero} alt="Xash" className="xash-hero-img" />
         
        </div>
      </section>

      <div className="xash-desktop-content">
        
     <div className="xash-sidebar-info-card">
  
  <div className="sidebar-info-item">
    <span>🕒</span>
    <span className="info-title">PREPARACIÓN</span>
   
    <div className="info-item-line" />
    <strong className="info-value">24h</strong>
  </div>

  <div className="sidebar-info-item">
    <span>🍴</span>
    <span className="info-title">PORCIONES</span>
   
    <div className="info-item-line" />
    <strong className="info-value">6-8</strong>
  </div>

  <div className="sidebar-info-item">
    <span>📋</span>
    <span className="info-title">DIFICULTAD</span>
    
    <div className="info-item-line" />
    <strong className="info-value">Paciencia</strong>
  </div>

</div>


        <aside className="xash-desktop-sidebar">
          <div className="xash-ingredients-box">
            <h2 className="xash-history-title">La Historia</h2>
            <p className="xash-main-description">
              El ritual el viernes por la tarde. El Xash no es solo una sopa; 
              es un compromiso con el tiempo. Decía que el secreto estaba in el 
              agua fría de la montaña y en nunca, jamás, añadir sal hasta que el 
              plato estuviera en la mesa. Era el desayuno de los domingos, cuando 
              la escarcha cubría las ventanas de Armenia y el calor del caldo nos 
              devolvía a la vida.
            </p>
          </div>
        </aside>

        
        <main className="xash-desktop-main">
          <h2 className="section-title">Ingredientes</h2>
          
          <div className="ingredients-grid-desktop">
            {desktopIngredients.map((item) => (
              <div className="ingredient-card-desktop" key={item.id}>
                <span className="dot">•</span>
                <span className="ingredient-name">
                  {item.name} <span className="ingredient-desc">{item.description}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="xash-steps-container">
            {/* ШАГ 1 */}
            <div className="xash-step-item">
              <div className="xash-step-number">1</div>
              <div className="xash-step-content">
                <h3 className="xash-step-title">El Lavado (24 horas)</h3>
                <p className="xash-step-text">
                  Coloca las patas de ternera en una olla grande y cúbrelas con agua fría. Debes 
                  cambiar el agua cada 2-3 horas durante un día completo. Esto elimina cualquier 
                  impureza y garantiza un caldo cristalino.
                </p>
              </div>
            </div>

            
            <div className="xash-step-item">
              <div className="xash-step-number">2</div>
              <div className="xash-step-content">
                <h3 className="xash-step-title">La Cocción Nocturna</h3>
                <p className="xash-step-text">
                  Lleva a ebullición y retira la espuma. Baja el fuego al mínimo absoluto. El Xash debe 
                  "susurrar", no hervir. Cocina durante toda la noche (8-10 horas) hasta que la carne 
                  se desprenda sola del hueso y el caldo esté espeso.
                </p>
              </div>
            </div>

           
            <div className="xash-step-image-wrapper">
              <img src={xashPrep} alt="Preparación de Xash" className="xash-prep-img" />
            </div>

          
            <div className="xash-step-item">
              <div className="xash-step-number">3</div>
              <div className="xash-step-content">
                <h3 className="xash-step-title">El Acompañamiento</h3>
                <p className="xash-step-text">
                  Prepara el ajo picado con un poco de caldo en un cuenco aparte. Corta los rábanos 
                  en rodajas finas y desmenuza el lavash seco. El Xash se sirve sin sal; cada comensal 
                  añade ajo, sal y lavash a su gusto.
                </p>
              </div>
            </div>

          
            <div className="xash-step-item">
              <div className="xash-step-number">4</div>
              <div className="xash-step-content">
                <h3 className="xash-step-title">El Ritual de la Mesa</h3>
                <p className="xash-step-text">
                  Tradicionalmente se cubre la cabeza con una servilleta para inhalar el aroma 
                  medicinal del caldo. Se acompaña de un pequeño trago de vodka helado para 
                  equilibrar la riqueza del plato.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div> 
    </div> 
  );
};

export default Xash;
