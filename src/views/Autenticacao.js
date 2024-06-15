import React,{useState} from 'react';
import { Container, H1, Image, Input, Button, ContainerItens } from "../style";
import people from '../assets/people.svg';
import { useUserController } from '../controllers/UserController';
import ButtonExample from '../components/ComponentBtn_ex';
import { Link } from 'react-router-dom';

const Autenticacao = () => {
    const { changeInputUserName, changeInputEndereço,changeInputCidade,changeInputCep,changeInputCpf,changeInputRg,changeInputNascimento, changeInputSenha,changeInputPais,changeInputConfirmar,changeInputEmail } = useUserController();

return(
    <Container>
       <Image alt="people" src={people} />
        <H1> Autenticação de usuário </H1>

        <Input onchange={changeInputEmail}placeholder="Digite seu e-mail"type="text"/>  
        <Button onSubmit={changeInputEmail}>Enviar e-mail de autenticação</Button>
    </Container>
);
};

export default Autenticacao;