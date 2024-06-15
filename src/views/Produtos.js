import React,{useState} from 'react';
import { Container, H1, Image, Input, InputLabel, Button, ContainerItens,User,FiltersContainer, ProductPageContainer,Sidebar,showSidebar} from "../style";
import { useUserController } from '../controllers/UserController';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';


const Produtos = () => {

    

    
        
 const products = [];
return( 
  
    <div>
<Container>
<h1></h1> 
    <ContainerItens>   
        <div className="container-fluid">
            <div className="row">
                        <div className="col-md-3">
                            <FiltersContainer>                           
                                <Filters />  
                            </FiltersContainer>
                        </div>

                        <div className="col-md-9">
                            <ProductPageContainer>
                                <ProductList />
                                <ProductList products={products} />  
                            </ProductPageContainer>          
                             
                        </div>
            </div>
        </div>
    </ContainerItens>
</Container>        
</div>
);
};
export default Produtos;