import React,{useState} from 'react';
import { Container, H1, Image, Input, InputLabel, Button, ContainerItens,User, } from "../style";
import { useUserController } from '../controllers/UserController';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';

//imagens

import Alme from '../assets/Calcados/Alme.webp';
import Oasics from '../assets/Calcados/Oasics.webp';
import T_fila from '../assets/Calcados/T_fila.png';
import Topper from '../assets/Calcados/Topper.webp';
import cafeteira from '../assets/Eletrodomesticos/cafeteira.png';
import Fritadeira_Eletrica from '../assets/Eletrodomesticos/Fritadeira_Eletrica.webp';
import ventilador from '../assets/Eletrodomesticos/ventilador.png';


const Produtos = () => {
        //const { users, addNewUser, changeInputUserName, changeInputSenha } = useUserController();

        const products = [
            { name: 'Alme', image: Alme },
            { name: 'Oasics', image: Oasics },
            { name: 'T Fila', image: T_fila },
            { name: 'Topper', image: Topper },
            { name: 'Cafeteira', image: cafeteira },
            { name: 'Fritadeira Elétrica', image: Fritadeira_Eletrica },
            { name: 'Ventilador', image: ventilador },
          ];

return( 
  
    <div>
<Container>
<h1></h1> 
    <ContainerItens>   
        <div className="container-fluid">
            <div className="row">
                        <div className="col-md-3">
                            <Filters />
                        </div>

                        <div className="col-md-9">
                            <ProductList />
                            <ProductList products={products} />
                            
                        </div>
            </div>
        </div>
    </ContainerItens>
</Container>        
</div>
);
};
export default Produtos;