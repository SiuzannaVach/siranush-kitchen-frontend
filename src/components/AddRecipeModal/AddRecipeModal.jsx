import React, { useState,useEffect } from 'react';

import bgUploadMobile from '../../assets/bg-upload-mobile.png';
import bgUploadDesktop from '../../assets/bg-upload-desktop.png';

import iconUpload from '../../assets/icon.svg'; 

export default function AddRecipeModal({ isOpen, onClose, onSave, categories,recipeToEdit }) {
  // Локальные стейты формы для сбора данных
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('reposteria'); 
  const [difficulty, setDifficulty] = useState('Herencia'); 
  const [time, setTime] = useState('45');
  const [servings, setServings] = useState('6');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

 
  useEffect(() => {
    if (recipeToEdit) {
      setTitle(recipeToEdit.title || '');
      setCategory(recipeToEdit.category || 'reposteria');
      setDifficulty(recipeToEdit.difficulty || 'Herencia');
      setTime(recipeToEdit.time ? recipeToEdit.time.replace(/\D/g, '') : '45');
      setServings(recipeToEdit.servings ? recipeToEdit.servings.replace(/\D/g, '') : '6');
      setDescription(recipeToEdit.description || '');
      setImage(recipeToEdit.image || null);
    } else {
      setTitle('');
      setCategory('reposteria');
      setDifficulty('Herencia');
      setTime('45');
      setServings('6');
      setDescription('');
      setImage(null);
    }
  }, [recipeToEdit, isOpen]);


 
  if (!isOpen) return null;

 
  const handleSubmit = (e, isDraft = false) => {
    e.preventDefault();
    if (!title) return;

    onSave({
      id: Date.now(),
      title,
      category,
      difficulty,
      time: `${time} min`,
      servings: `Para ${servings}`,
      description,
      image,
      status: isDraft ? 'borrador' : 'publicado'
    });

   
    setTitle('');
    setDescription('');
    setImage(null);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      
      <div className="recipe-modal" onClick={(e) => e.stopPropagation()}>
        
       
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        <h2>Nueva Receta Familiar</h2>
        <p className="modal-subtitle">Documentando la historia, ingredientes a ingredientes.</p>
        
        <form onSubmit={(e) => handleSubmit(e, false)}>
          
          {/* ==========================================================================
             MOBILE VIEW: 
             ========================================================================== */}
                  
          <div className="form-group mobile-only">
            <label>Visuales de la Receta</label>
            <label 
              htmlFor="file-mobile" 
              className="upload-area-mobile"
              style={{ backgroundImage: `url(${image || bgUploadMobile})` }}
            >
              {!image && (
                <div className="upload-overlay-mobile-content">
                  <img src={iconUpload} alt="Añadir" className="upload-icon-img" />
                  <span>Añadir foto</span>
                </div>
              )}
            </label>
            <input 
              type="file" 
              id="file-mobile" 
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0]; 
                if (file) {
                  setImage(URL.createObjectURL(file)); 
                }
              }} 
              style={{ display: 'none' }} 
            />
          </div>


         
          <div className="form-group">
            <label>Título de la Receta</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="ej. Gata Especiada de la Abuela" 
              required 
            />
          </div>

          <div className="form-row">
            <div className="form-group flex-1">
              <label>Categoría</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories && categories.filter(c => !c.isAll).map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group flex-1">
              <label>Dificultad</label>
              <div className="difficulty-selector">
                {['Novato', 'Herencia', 'Maestro'].map((level) => (
                  <button
                    key={level}
                    type="button"
                    className={`diff-btn ${difficulty === level ? 'active' : ''}`}
                    onClick={() => setDifficulty(level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
                
         
                  
          <div className="form-row">
            
           
            <div className="form-group flex-1">
              <label>Tiempo de Prep. (min)</label>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', width: '100%', marginTop: '6px' }}>
                <span style={{ fontSize: '20px', lineHeight: 1 }}>⏱️</span>
                <input 
                  type="number" 
                  value={time} 
                  onChange={(e) => setTime(e.target.value)} 
                  style={{ flex: 1, width: '100%' }}
                />
              </div>
            </div>

           
            <div className="form-group flex-1">
              <label>Porciones</label>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', width: '100%', marginTop: '6px' }}>
                <span style={{ fontSize: '20px', lineHeight: 1 }}>👥</span>
                <input 
                  type="number" 
                  value={servings} 
                  onChange={(e) => setServings(e.target.value)} 
                  style={{ flex: 1, width: '100%' }}
                />
              </div>
            </div>

          </div>

          
          {/* ==========================================================================
             DESKTOP VIEW: 
             ========================================================================== */}
                    <div className="form-group desktop-only">
            <label>Visuales de la Receta</label>
            <label 
              htmlFor="file-desktop" 
              className="upload-area-desktop"
              style={{ backgroundImage: `url(${image || bgUploadDesktop})` }}
            >
              {!image && (
                <div className="upload-overlay-content">
                  <img src={iconUpload} alt="Subir" className="upload-icon-img" />
                  <span>Subir una Foto</span>
                  <small>PNG, JPG hasta 10MB</small>
                </div>
              )}
            </label>
            <input 
              type="file" 
              id="file-desktop" 
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0]; 
                if (file) {
                  setImage(URL.createObjectURL(file)); 
                }
              }} 
              style={{ display: 'none' }} 
            />
          </div>

         
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn-discard">
              Descartar Borrador
            </button>
            <div className="actions-right">
              <button 
                type="button" 
                onClick={(e) => handleSubmit(e, true)} 
                className="btn-draft"
              >
                Guardar como Borrador
              </button>
              <button type="submit" className="btn-submit">
                Guardar Receta
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
