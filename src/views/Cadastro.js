import React, { useState } from 'react';
import { Container, H1, Image, Input, Button, ContainerItens } from "../style";
import Avatar from '../assets/avatar.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    userName: '',
    cpf: '',
    rg: '',
    nascimento: '',
    endereco: '',
    cidade: '',
    cep: '',
    pais: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirmClick = () => {
    // Verificar se todos os campos estão preenchidos
    const emptyFields = Object.entries(formData).filter(([key, value]) => value === '');

    if (emptyFields.length > 0) {
      alert('Por favor, preencha todos os campos antes de confirmar.');
      return;
    }

    // INSERIR Lógica para salvar os dados do usuário
    console.log('Dados do formulário:', formData);
    // INSERIR Adicione aqui a lógica para enviar os dados ao backend
    navigate('/home');
  };

  return (
    <Container>
      <H1> Realize o seu cadastro </H1>
      <ContainerItens>
        <table>
          <tbody>
            <tr>
              <td><Input name="userName" onChange={handleInputChange} placeholder="Usuário" type="text" /></td>
              <td><Input name="cpf" onChange={handleInputChange} placeholder="CPF" type="text" /></td>
              <td><Input name="rg" onChange={handleInputChange} placeholder="RG" type="text" /></td>
              <td><Input name="nascimento" onChange={handleInputChange} placeholder="Nascimento" /></td>
            </tr>
            <tr>
              <td><Input name="endereco" onChange={handleInputChange} placeholder="Endereço" type="text" /></td>
              <td><Input name="cidade" onChange={handleInputChange} placeholder="Cidade" type="text" /></td>
              <td><Input name="cep" onChange={handleInputChange} placeholder="CEP" type="text" /></td>
              <td><Input name="pais" onChange={handleInputChange} placeholder="País" type="text" /></td>
            </tr>
            <tr>
              <td><Input name="email" onChange={handleInputChange} placeholder="e-mail" type="email" /></td>
              <td><Input name="senha" onChange={handleInputChange} placeholder="Senha" type="password" /></td>
              <td><Input name="confirmarSenha" onChange={handleInputChange} placeholder="Confirmar senha" type="password" /></td>
              <td><Button onClick={handleConfirmClick}>Confirmar</Button></td>
            </tr>
          </tbody>
        </table>
      </ContainerItens>
      <Image alt="logo-imagem" src={Avatar} />
    </Container>
  );
};

export default Login;
