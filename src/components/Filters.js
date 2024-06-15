// src/components/Filters.js
import React from 'react';

const Filters = () => {
  return (
    <div className="p-5">
      <h4>Filtro</h4>
      <form>
        <div className="form-group">
          <label htmlFor="category">Categorias</label>
          <select className="form-control" id="category">
            <option>Todos</option>
            <option>Eletrodomésticos</option>
            <option>Calçados</option>
            <option>Informática</option>
          </select>
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="priceRange">Faixa de preço  </label>
          <input type="range" className="form-control-range" id="priceRange" />
        </div>
        <button type="submit" className="btn btn-primary">Aplicar filtro</button>
      </form>
    </div>
  );
};

export default Filters;
