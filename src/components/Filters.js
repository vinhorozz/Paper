//src\components\Filters.js
 
  import React, { useState } from 'react';

  const Filters = ({ onCategoryChange, onPriceChange }) => {
    const [priceRange, setPriceRange] = useState([0, 1000]);
  
    const handleCategoryChange = (e) => {
      const selectedCategories = Array.from(e.target.form.elements)
        .filter(input => input.type === 'checkbox' && input.checked)
        .map(input => input.id);
      onCategoryChange(selectedCategories);
    };
  
    const handlePriceChange = (e) => {
      const newPriceRange = [0, parseInt(e.target.value, 10)];
      setPriceRange(newPriceRange);
      onPriceChange(newPriceRange);
    };
  
    return (
      <div className="p-5 filters-container">
        <h4>Filtro</h4>
        <form>
        <div className="form-group">
          <label>Categorias</label>


          {['Bolsas',
            'Brinquedos',
            'Calçados',
            'Cama, Mesa e Banho',
            'Camping',
            'Churrasco',
            'Eletrodomésticos',
            'Ferramentas',
            'Informática',
            'Perfumes',
            'Utensílios',
            ].map((category, index) => (
<div className="form-check" key={index}>             
	 <input className="form-check-input" type="checkbox" id={category} onChange={handleCategoryChange}/>
 	<label className="form-check-label" htmlFor={category}>{category} </label>
</div>
          ))}

     </div>

  


          <div className="form-group">
            <label htmlFor="priceRange">Faixa de preço</label>
            <input 
              type="range" 
              className="form-control-range" 
              id="priceRange" 
              min="0" 
              max="1000" 
              step="50" 
              value={priceRange[1]} 
              onChange={handlePriceChange} 
            />
            <div>Até R$ {priceRange[1]}</div>
          </div>
        </form>
      </div>
    );
  };
  
  export default Filters;
  

