import React, { useState } from 'react';
import {
  FiltersContainer,
  FilterItem,
  FilterLabel,
  FilterCheckbox,
  FilterPrice,
  InputSlide
} from '../style';

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

  const categories = [
    'Bolsas', 'Brinquedos', 'Calçados', 'Cama, Mesa e Banho', 'Camping', 
    'Churrasco', 'Eletrodomésticos', 'Ferramentas', 'Informática', 
    'Perfumes', 'Utensílios'
  ];

  return (
    <FiltersContainer>
      <h4>Filtro</h4>
      <form>
        <div>
          <label>Categorias</label>
          {categories.map((category, index) => (
            <FilterItem key={index}>
              <FilterCheckbox
                type="checkbox"
                id={category}
                onChange={handleCategoryChange}
              />
              <FilterLabel htmlFor={category}>{category}</FilterLabel>
            </FilterItem>
          ))}
        </div>

        <FilterPrice>
          <label htmlFor="priceRange">Faixa de preço</label>
          <InputSlide
            type="range"
            id="priceRange"
            min="0"
            max="1000"
            step="50"
            value={priceRange[1]}
            onChange={handlePriceChange}
          />
          <div>Até R$ {priceRange[1]}</div>
        </FilterPrice>
      </form>
    </FiltersContainer>
  );
};

export default Filters;
