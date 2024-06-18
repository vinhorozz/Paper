//src\views\Produtos.js
import React, { useState, useEffect } from 'react';
import { ContainerPrincipal, Container, ContainerItens, FiltersContainer, ProductPageContainer,ContainerProductItens } from "../style";
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';
import ProductCard from '../components/ProductCard';

const Produtos = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    const loadedProducts = [
        { id: 1, name: 'Tênis Alme', category: 'Calçados', image: require('../assets/Categorias/Calcados/Alme.webp'), price: 120 },
        { id: 2, name: 'Tênis Oasics', category: 'Calçados', image: require('../assets/Categorias/Calcados/Oasics.webp'), price: 780 },
        { id: 3, name: 'Tênis Fila', category: 'Calçados', image: require('../assets/Categorias/Calcados/T_fila.png'), price: 510 },
        { id: 4, name: 'Tênis Topper', category: 'Calçados', image: require('../assets/Categorias/Calcados/Topper.webp'), price: 190 },
        { id: 5, name: 'Tênis Kipling Sophia Rose', category: 'Calçados', image: require('../assets/Categorias/Calcados/KiplingSophiRose.webp'), price: 199 },
        { id: 6, name: 'Cafeteira', category: 'Eletrodomésticos', image: require('../assets/Categorias/Eletrodomesticos/cafeteira.png'), price: 249 },
        { id: 7, name: 'Fritadeira Eletrica', category: 'Eletrodomésticos', image: require('../assets/Categorias/Eletrodomesticos/Fritadeira_Eletrica.webp'), price: 529 },
        { id: 8, name: 'Ventilador Mondial', category: 'Eletrodomésticos', image: require('../assets/Categorias/Eletrodomesticos/ventilador.png'), price: 289 },
        { id: 9, name: 'Kipling Art Mini', category: 'Bolsas', image: require('../assets/Categorias/Bolsas/kiplingArtMini.webp'), price: 78 },
        { id: 10, name: 'Mochila Reserva', category: 'Bolsas', image: require('../assets/Categorias/Bolsas/mochilaRSV.png'), price: 380 },
        { id: 11, name: 'Mochila Stradda', category: 'Bolsas', image: require('../assets/Categorias/Bolsas/mochilaStradda.jpg'), price: 210 },
        ]; 

    setProducts(loadedProducts);
    setFilteredProducts(loadedProducts);
  }, []);

  useEffect(() => {
    let newFilteredProducts = products;

    if (selectedCategories.length > 0) {
      newFilteredProducts = newFilteredProducts.filter(product =>           
        selectedCategories.includes(product.category)
      );
    }

    newFilteredProducts = newFilteredProducts.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(newFilteredProducts);
  }, [selectedCategories, products, priceRange]);

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  return (

<ContainerPrincipal>
    
        <Filters onCategoryChange={handleCategoryChange} onPriceChange={handlePriceChange} />
    
      <ContainerProductItens>
        <ProductList products={filteredProducts} />
      </ContainerProductItens>
    </ContainerPrincipal>
  )
  
  
};

export default Produtos;
