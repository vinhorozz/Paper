// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card mb-4">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">R$ {product.price}</p>
        <button className="btn btn-primary">Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default ProductCard;