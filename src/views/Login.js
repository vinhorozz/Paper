import React from 'react';
import { Container, H1, Image, Input, Button, ContainerItens } from "../style";
import Avatar from '../assets/avatar.svg';
import Arrow from '../assets/arrow.svg';
import { useUserController } from '../controllers/UserController';
import { useNavigate } from 'react-router-dom';//permite a navegação programatica utilizando as funções fechas dentro das constantes, sem usar o "link" <a>;

const Login = () => {
  const { users, addNewUser, changeInputUserName, changeInputSenha } = useUserController();

  const navigate = useNavigate();// criar variável que recebe a função "navegate" do React, e assim, poderá ser usada em cada "button"

//Funções de Manipulação de Clique no "button"
  const handleAccessClick = () => {
    addNewUser();
    navigate('/Produtos'); // passao o linK como paramentro para a variável "navegate", e o passará  para a Função "useNavegate"
  };

  const handleForgotPasswordClick = () => {
    addNewUser();
    navigate('/autenticacao');
  };

  const handleRegisterClick = () => {
    navigate('/Cadastro');
  };

  return (
    <Container>
      <ContainerItens>
        <H1>Login</H1>
        <Input onChange={changeInputUserName} placeholder="Usuário" />
        <Input onChange={changeInputSenha} placeholder="Senha" type="password" />
        <Button onClick={handleAccessClick}>
          Acessar <img alt='seta' src={Arrow} />
        </Button>
        <Button onClick={handleForgotPasswordClick}>
          Esqueci a senha
        </Button>
        <Button onClick={handleRegisterClick}>
          Registrar-se
        </Button>
      </ContainerItens>
      <Image alt="logo-imagem" src={Avatar} />
    </Container>
  );
};

export default Login;
