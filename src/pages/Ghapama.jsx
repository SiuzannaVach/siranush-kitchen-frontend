import React, { useState, useEffect } from 'react';
import ghapamaMobileHero from '../assets/dish-ghapama-mobile.jpg';
import ghapamaHero from '../assets/ghapama-hero.jpg';
import ghapamaProcess from '../assets/ghapama-process.jpg';
import ghapamaPrep1 from '../assets/ghapama-prep-1.jpg';
import ghapamaPrep2 from '../assets/ghapama-prep-2.jpg';
import ghapamaPrep3 from '../assets/ghapama-prep-3.jpg';

const Ghapama = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
      <div className="ghapama-page-wrapper">
        <div className="ghapama-container">
          
          {/* 1. Блок Hero (Мобильный) */}
          <section className="ghapama-hero-section">
            <div className="ghapama-big-image">
              <img src={ghapamaPrep1} alt="Ghapama" />
            </div>
            <h1 className="ghapama-main-title">Ghapama: El Tesoro Dorado</h1>
          </section>

          {/* 2. Карточка: La Historia */}
          <div className="ghapama-ingredients-box">
            <h2>La Historia</h2>
            <p className="ghapama-main-description">
              En nuestra aldea, cuando el aire se volvía fresco y las hojas de los viñedos 
              se tornaban ámbar, sabíamos que era tiempo de Ghapama.La Siranush 
              decía que cada calabaza era una promesa de prosperidad. "Mira el color," 
              decía mientras untaba la miel, "es el sol que guardamos para el invierno.
            </p>
          </div>

          {/* 3. Карточка: Preparar la Cuna */}
           <div className="ghapama-ingredients-box">
            <div className="step-inner-img" style={{ marginTop: 0, marginBottom: '16px' }}>
              <img src={ghapamaPrep2} alt="Preparar la Cuna" />
            </div>
            <h2>Preparar la Cuna</h2>
            <p className="ghapama-main-description">
              Lava y corta la parte superior. Retira las semillas con cuidado, 
              dejando espacio para el tesoro.
            </p>
          </div>

          {/* 4. Карточка: Смесь и Ингредиенты */}
          <div className="ghapama-ingredients-box">
            <div className="step-inner-img" style={{ marginTop: 0, marginBottom: '16px' }}>
              <img src={ghapamaPrep3} alt="La Mezcla de Oro" />
            </div>

            <h2>La Mezcla de Oro</h2>
            <p className="ghapama-main-description" style={{ marginBottom: '32px' }}>
              Mezcla el arroz con los frutos secos, nueces, canela y miel. 
              Cada bocado debe ser una joya.
            </p>




            <h2>Ingredientes</h2>
            <ul className="ghapama-list">
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span>1 Calabaza grande (aprox. 3kg)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span>1/2 taza de Mantequilla</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span>Fruta deshidratada (Damascos, Pasas)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span>Canela en rama y en polvo</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span>2 tazas de Arroz Basmati</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span>Frutos secos (Almendras, Nueces)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span>1/4 taza de Miel pura</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span>Pizca de sal marina</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    );
  }


















//const Ghapama = () => {
  return (
     
    <div className="ghapama-page-wrapper">
      <div className="ghapama-container">
     
        
        {/* 1. Блок Hero */}
        <section className="ghapama-hero-section">
          <h1 className="ghapama-main-title">Ghapama: La Calabaza de la Fortuna</h1>
          <p className="ghapama-main-description">
            Un festín visual y espiritual. La Ghapama no es solo una calabaza rellena; 
            es un símbolo de paz, prosperidad y la alegría de la cosecha, inmortalizada 
            en canciones y leyendas familiares.
          </p>
          
          <div className="ghapama-meta-info">
            <span>⏱ 2h 30m</span>
            <span>🍴 6 Porciones</span>
            <span>⭐ Intermedio</span>
          </div>

          <div className="ghapama-big-image">
            <img src={ghapamaHero} alt="Ghapama" />
          </div>
        </section>

        {/* 2. Блок Ингредиентов и Песни */}
        <div className="ghapama-ingredients-row">
          <section className="ghapama-song-box">
            <h3>🎵 Jan Ghapama!</h3>
            <p className="song-quote">
              "Hey, Jan Ghapama! Bari Ghapama! Djan Ghapama, hamov Ghapama... Mil invitados vendrán a probarla."
            </p>
            <p className="song-desc">
              Esta canción tradicional se canta mientras se lleva la calabaza a la mesa. 
              Describe la alegría de invitar a todos los parientes a comer.
            </p>
            
          </section>

         
            
<section className="ghapama-ingredients-box" style={{ backgroundColor: '#ffffff', borderRadius: '24px', border: '3px solid #700009', boxShadow: '0 0 20px rgba(112, 0, 9, 0.35), 0 0 8px rgba(112, 0, 9, 0.15)', padding: '32px' }}>

            <h2>Ingredientes</h2>
            <ul className="ghapama-list">
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span style={{ fontWeight: '500', fontSize: '15px' }}>1 Calabaza grande (aprox. 3kg)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span style={{ fontWeight: '500', fontSize: '15px' }}>2 tazas de Arroz Basmati</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span style={{ fontWeight: '500', fontSize: '15px' }}>1/2 taza de Mantequilla</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span style={{ fontWeight: '500', fontSize: '15px' }}>Frutos secos (Almendras, Nueces)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span style={{ fontWeight: '500', fontSize: '15px' }}>Fruta deshidratada (Damascos, Pasas)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span style={{ fontWeight: '500', fontSize: '15px' }}>1/4 taza de Miel pura</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span style={{ fontWeight: '500', fontSize: '15px' }}>Canela en rama y en polvo</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ingredient-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5C6340', borderRadius: '50%', flexShrink: 0 }}></span>
                <span style={{ fontWeight: '500', fontSize: '15px' }}>Pizca de sal marina</span>
              </li>
            </ul>
          </section>
        </div>


        {/* 3. Блок Шагов */}
        <section className="ghapama-steps-section">
          <h2>Preparación</h2>
          
          <div className="ghapama-step-card">
            <div className="step-badge step-orange">1</div>
            <div className="step-text-block">
              <h3>Preparar el Corazón de la Calabaza</h3>
              <p>
                Corta la parte superior de la calabaza para crear una tapa. Retira las semillas y las fibras con una cuchara de madera. Unta generosamente el interior con mantequilla y miel.
              </p>
              <div className="step-inner-img">
                <img src={ghapamaProcess} alt="Process 1" />
              </div>
            </div>
          </div>

          <div className="ghapama-step-card">
            <div className="step-badge step-green">2</div>
            <div className="step-text-block">
              <h3>El Relleno Festivo</h3>
              <p>
                Cocina el arroz a medias (par-boil). Mézclalo con los frutos secos picados, los damascos, las pasas y la canela. El aroma debe llenar tu cocina de calidez.
              </p>
            </div>
          </div>

          <div className="ghapama-step-card">
            <div className="step-badge step-yellow">3</div>
            <div className="step-text-block">
              <h3>Horneado Lento</h3>
              <p>
                Rellena la calabaza, coloca la tapa y envuélvela en papel manteca. Hornea a 180°C durante aproximadamente 2 horas hasta que la carne de la calabaza esté suave como mantequilla.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Ghapama;
