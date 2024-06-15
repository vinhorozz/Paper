// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
// Importe as imagens locais
import Alme from '../assets/Calcados/Alme.webp';
import Oasics from '../assets/Calcados/Oasics.webp';
import T_fila from '../assets/Calcados/T_fila.png';
import Topper from '../assets/Calcados/Topper.webp';
import cafeteira from '../assets/Eletrodomesticos/cafeteira.png';
import Fritadeira_Eletrica from '../assets/Eletrodomesticos/Fritadeira_Eletrica.webp';
import ventilador from '../assets/Eletrodomesticos/ventilador.png';
import BolsakiplingMini from '../assets/Bolsas/kiplingArtMini.webp';
import MochilaRVS from '../assets/Bolsas/mochilaRSV.png';
import MochilaStradda from '../assets/Bolsas/mochilaStradda.jpg';
import KiplingSophiRose from '../assets/Calcados/KiplingSophiRose.webp'

const products = [
  { id: 1, name: 'Tênis Alme', price: 109.99, image: Alme },
  { id: 2, name: 'Tênis Oasics', price: 349.99, image: Oasics },
  { id: 3, name: 'Tênis Fila', price: 319.99, image: T_fila },
  { id: 4, name: 'Chuteira Topper', price: 129.99, image: Topper },
  { id: 5, name: 'Cafeteira', price: 249.99, image: cafeteira },
  { id: 6, name: 'Fritadeira Elétrica', price: 519.99, image: Fritadeira_Eletrica },
  { id: 7, name: 'Ventilador Mondial', price: 329.99, image: ventilador },
  { id: 8, name: 'Fritadeira Elétrica Wallita', price: 519.99, image: Fritadeira_Eletrica },
  { id: 9, name: 'Bolsa kipling Mini', price: 69.99, image: BolsakiplingMini },
  { id: 10, name: 'Tênis Kipling', price: 299.99, image: KiplingSophiRose },
  { id: 11, name: 'Mochila Reserva', price: 319.99, image: MochilaRVS },
  { id: 12, name: 'Mochila Stradda', price: 299.00, image: MochilaStradda },

  // Adicione mais produtos conforme necessário
];

const ProductList = () => {
  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
