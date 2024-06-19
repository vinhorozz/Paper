// src/components/Filters.js

import React, { useState, useEffect } from 'react';
import { FiltersContainer, FilterItem, FilterLabel, FilterCheckbox, FilterPrice, InputSlide } from '../style';
import categories from '../constantes/Categories';

const Filters = ({ onCategoryChange, onPriceChange, selectedCategories }) => {
  const [selected, setSelected] = useState(selectedCategories || []);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    setSelected(selectedCategories);
  }, [selectedCategories]);

  const handleCategoryChange = (category) => {
    let newSelected;
    if (selected.includes(category)) {
      newSelected = selected.filter(c => c !== category);
    } else {
      newSelected = [...selected, category];
    }
    setSelected(newSelected);
    onCategoryChange(newSelected);
  };

  const handlePriceChange = (e) => {
    const newRange = [Number(e.target.value), priceRange[1]];
    setPriceRange(newRange);
    onPriceChange(newRange);
  };

  const handlePriceChangeMax = (e) => {
    const newRange = [priceRange[0], Number(e.target.value)];
    setPriceRange(newRange);
    onPriceChange(newRange);
  };

  return (
    <FiltersContainer>
      <h3>Filtros</h3>
      <div>
        <h4>Categorias</h4>
        {categories.map((category, index) => (
          <FilterItem key={index}>
            <FilterCheckbox
              type="checkbox"
              checked={selected.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <FilterLabel>{category}</FilterLabel>
          </FilterItem>
        ))}
      </div>
      <FilterPrice>
        <h4>Faixa de Preço</h4>
        
         
        <div>
          <span></span>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => handlePriceChangeMax(e)}
            step="10"
          />
          <span>{priceRange[1]}</span>
        </div>
      </FilterPrice>
    </FiltersContainer>
  );
};

export default Filters;
