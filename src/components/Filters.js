// src/components/Filters.js
import React, { useState } from 'react';

const Filters = ({ onCategoryChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const { id, checked } = event.target;
    const newSelectedCategories = checked
      ? [...selectedCategories, id]
      : selectedCategories.filter((category) => category !== id);

    setSelectedCategories(newSelectedCategories);
    onCategoryChange(newSelectedCategories);
  };

  return (
   <div className="p-5 filters-container">
      <h4>Filtro</h4>
      <form>
        <div className="form-group">
          <label>Categorias</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="category1" />
            <label className="form-check-label" htmlFor="category1">Eletrodomésticos</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="category2" />
            <label className="form-check-label" htmlFor="category2">Calçados</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="category3" />
            <label className="form-check-label" htmlFor="category3">Informática</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="category4" />
            <label className="form-check-label" htmlFor="category3">Brinquedos</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="category5" />
            <label className="form-check-label" htmlFor="category3">Perfumes</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="category6" />
            <label className="form-check-label" htmlFor="category3">Vestuário</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="category7" />
            <label className="form-check-label" htmlFor="category3">Camping</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="category7" />
            <label className="form-check-label" htmlFor="category3">Churrasco</label>
          </div>
       
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="category8" />
            <label className="form-check-label" htmlFor="category3">Utensílios</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="category9" />
            <label className="form-check-label" htmlFor="category3">Ferramentas</label>
          </div>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" id="category10" />
            <label className="form-check-label" htmlFor="category3">Cama, Mesa e Banho</label>
          </div>
        <br></br>

        <div className="form-group">
          <label htmlFor="priceRange">Faixa de preço</label>
          <input type="range" className="form-control-range" id="priceRange" />
        </div>

        <button type="submit" className="btn btn-primary">Aplicar filtro</button>
      </form>
    </div>
  );
};

export default Filters;
