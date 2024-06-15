import { useState } from 'react';

export const useUserController = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [senha, setSenha] = useState('');
  const [Endereço, setEndereço] = useState('');
  const [Cidade, setCidade] = useState('');
  const [Cep, setCep] = useState('');
  const [Cpf, setCpf] = useState('');
  const [Rg, setRg] = useState('');
  const [Nascimento, setNascimento] = useState('');
  const [Pais,setPais]=useState('');
  const [Confirmar,setConfirmar]=useState('');


  const addNewUser = () => {
    setUsers([...users, { id: Math.random(), name, senha,Endereço,Cidade,Cep, Cpf, Rg, Nascimento ,Pais, Confirmar}]);
  };

  function changeInputUserName(event) {
    setName(event.target.value);
  };

  function changeInputSenha(event) {
    setSenha(event.target.value);
  }
  const changeInputEndereço = (event) => {
    setEndereço(event.target.value);
  };
  const changeInputCidade = (event) => {
    setCidade(event.target.value);
  };
  const changeInputCep = (event) => {
    setCep(event.target.value);
  };
  const changeInputCpf = (event) => {
    setCpf(event.target.value);
  };
  const changeInputRg = (event) => {
    setRg(event.target.value);
  };
  const changeInputNascimento = (event) => {
    setNascimento(event.target.value);
  };
  const changeInputPais = (event) => {
    setPais(event.target.value);
  };
  const changeInputConfirmar = (event) => {
    setConfirmar(event.target.value);
  };

  return {
    users,
    name,
    senha,
    addNewUser,
    changeInputUserName,
    changeInputSenha,
    changeInputEndereço,
    changeInputNascimento,
    changeInputCpf,
    changeInputConfirmar,
    changeInputPais,
    changeInputRg,
    

  };
};