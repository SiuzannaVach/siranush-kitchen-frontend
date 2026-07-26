import React, { useState } from 'react';

import iconAll from '../assets/icon.svg'; 
import iconSopas from '../assets/icon-sopas.svg';
import iconCarnes from '../assets/icon-carnes.svg';
import iconReposteria from '../assets/icon-reposteria.svg';
import iconFestividades from '../assets/icon-festividades.svg';


import dishXash from '../assets/recipe-xash.jpg';
import dishGata from '../assets/recipe-gata.jpg';
import dishDolma from '../assets/recipe-dolma.jpg'; 
import dishGhapama from '../assets/recipe-ghapama.jpg';

import iconEdit from '../assets/icon-edit.svg';
import iconDelete from '../assets/icon-delete.svg';

export default function Dashboard() {
 
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos los Platos', icon: iconAll, isAll: true },
    { id: 'sopas', name: 'Sopas', icon: iconSopas },
    { id: 'carnes', name: 'Carnes', icon: iconCarnes },
    { id: 'reposteria', name: 'Repostería', icon: iconReposteria },
    { id: 'festividades', name: 'Festividades', icon: iconFestividades }
  ];



 const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'Dolma de Hoja de Parra de Verano',
      category: 'carnes',
      image: dishDolma,
      description: '"Siempre siempre decía que el secreto de un dolma perfecto es la finura de la hoja. Cada envoltura es una promesa de paciencia y hogar."',
      time: '2 hrs.',
      servings: 'Para 6'
    },
    {
      id: 2,
      title: 'Xash',
      category: 'sopas',
      image: dishXash,
      description: 'El desayuno de reyes y peones por igual, mejor compartido en una fría mañana de invierno.',
      time: '10-12hrs.',
      servings: 'Para 4'
    },
    {
      id: 3,
      title: 'Gata',
      category: 'reposteria',
      image: dishGata,
      description: 'Dulce recuerdo del monasterio de Geghard, masa hojaldrada y un corazón de koritz dorado.',
      time: '1 hr.',
      servings: 'Para 8'
    },
    {
      id: 4,
      title: 'Ghapama Horneado con Miel',
      category: 'festividades',
      image: dishGhapama,
      description: '"El Ghapama nunca fue solo una comida; era una canción... Lo horneamos hasta que la piel de la calabaza es tan suave como la seda y la mil canta con los  albaricoques."',
      time: '3 hrs.',
      servings: 'Para 10'
    }
  ]);

   const handleViewRecipe = (title) => {
    alert(`Visualizando la receta de: ${title}`);
  };

  const handleEditRecipe = (title) => {
    alert(`Editando la receta de: ${title}`);
  };

  const handleDeleteRecipe = (id, title) => {
    const confirmDelete = window.confirm(`¿Seguro que quieres borrar la receta "${title}"?`);
    if (confirmDelete) {
      setRecipes(recipes.filter(recipe => recipe.id !== id));
    }
  };

  const filteredRecipes = activeCategory === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === activeCategory);

  return (
<main className="dashboard-main">
 
  <section className="hero-banner"></section>
 <div className="action-bar">
        <button className="btn-add-recipe">Añadir nueva receta</button>
      </div> 

      
      <div className="content-layout">
        <nav className="categories-menu">
          {categories.map((cat) => (
            <div
              key={cat.id}
             
              className={`category-item ${cat.isAll ? 'all-meals' : ''} ${activeCategory === cat.id ? 'active' : ''}`}
              
              onClick={() => setActiveCategory(cat.id)}
            >
              <img src={cat.icon} alt={cat.name} width="18" height="18" />
              <span>{cat.name}</span>
            </div>
          ))}
          
        </nav>

        {/* renderizado condicional */}
        <section className="recipes-grid">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <article key={recipe.id} className="recipe-card">

                
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />

                <div className="recipe-info">
                  <h3>{recipe.title}</h3>
                  
                  <p>{recipe.description}</p>
                  <div className="recipe-meta">
                    <span>⏱ {recipe.time} preparación</span>
                    <span className="meta-item">👥 {recipe.servings}</span>
                  </div>
   <div className="recipe-buttons-row">
       <button 
     className="btn-view-recipe" 
    onClick={() => handleViewRecipe(recipe.title)}
  >
    Ver Receta
   </button>

  <button 
   className="btn-action edit" 
   title="Editar"
   onClick={() => handleEditRecipe(recipe.title)}
 >
      <img src={iconEdit} alt="Editar" />
    </button>
            
 <button 
         className="btn-action delete" 
         title="Borrar"
         onClick={() => handleDeleteRecipe(recipe.id, recipe.title)}
      >
     <img src={iconDelete} alt="Borrar" />
 
  </button>
 </div>

        </div> 
      </article>

            ))
          ) : (
            
            <div className="no-recipes">
              <p>No hay recetas disponibles en esta categoría todavía.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
