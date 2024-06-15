import React,{useState} from 'react';
import { Container, H1, Image, Input, Button, ContainerItens } from "../style";
import Avatar from '../assets/avatar.svg';
import Arrow from '../assets/arrow.svg';
import { useUserController } from '../controllers/UserController';
import { Link } from 'react-router-dom';

const Login = () => {
    const { users, addNewUser, changeInputUserName, changeInputSenha } = useUserController();

return(
    <Container>
    
       

        <ContainerItens>
        <H1>Login </H1>
            <Input onchange={changeInputUserName}placeholder="Usuário"/>
           
            <Input onChange={changeInputSenha} placeholder="Senha" type='password' />

            <Link to= "/Produtos"><Button onClick={addNewUser}> Acessar <img alt='seta' src={Arrow}/> </Button></Link>
         
            <Link to="/autenticacao"><Button onClick={addNewUser}> Esqueci a senha  </Button></Link>

            <Link to="/Cadastro"><Button> Registrar-se </Button></Link>


        </ContainerItens>
        <Image alt="logo-imagem" src={Avatar} />
    </Container>
);

};

export default Login;