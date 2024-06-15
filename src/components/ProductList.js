// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
// Importe as imagens locais
import Alme from '../assets/Calcados/Alme.webp';
import Oasics from '../assets/Calcados/Oasics.webp';
import T_fila from '../assets/Calcados/T_fila.png';
import Topper from '../assets/Calcados/Topper.webp';
import KiplingSophiRose from '../assets/Calcados/KiplingSophiRose.webp'
import cafeteira from '../assets/Eletrodomesticos/cafeteira.png';
import Fritadeira_Eletrica from '../assets/Eletrodomesticos/Fritadeira_Eletrica.webp';
import ventilador from '../assets/Eletrodomesticos/ventilador.png';
import BolsakiplingMini from '../assets/Bolsas/kiplingArtMini.webp';
import MochilaRVS from '../assets/Bolsas/mochilaRSV.png';
import MochilaStradda from '../assets/Bolsas/mochilaStradda.jpg';

//criar objetos
const products = [
  { id: 1, name: 'Tênis Alme', price: 109.99, image: Alme,category: 'category1'},
  { id: 2, name: 'Tênis Oasics', price: 349.99, image: Oasics ,category: 'category1'},
  { id: 3, name: 'Tênis Fila', price: 319.99, image: T_fila ,category: 'category1'},
  { id: 4, name: 'Chuteira Topper', price: 129.99, image: Topper ,category: 'category1'},
  { id: 5, name: 'Tênis Kipling', price: 299.99, image: KiplingSophiRose ,category: 'category1'},
  { id: 6, name: 'Fritadeira Elétrica', price: 519.99, image: Fritadeira_Eletrica ,category: 'category1'},
  { id: 7, name: 'Ventilador Mondial', price: 329.99, image: ventilador ,category: 'category1'},
  { id: 8, name: 'Cafeteira', price: 249.99, image: cafeteira ,category: 'category1'},
  { id: 9, name: 'Bolsa kipling Mini', price: 69.99, image: BolsakiplingMini ,category: 'category1'},
  { id: 10, name: 'Mochila Stradda', price: 299.00, image: MochilaStradda ,category: 'category1'},
  { id: 11, name: 'Mochila Reserva', price: 319.99, image: MochilaRVS ,category: 'category1'},
  { id: 12, name: 'Mochila Stradda', price: 299.00, image: MochilaStradda ,category: 'category1'},
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
