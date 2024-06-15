import React,{useState} from 'react';
import { Container, H1, Image, Input, Button, ContainerItens } from "../style";
import Avatar from '../assets/avatar.svg';
import { useUserController } from '../controllers/UserController';
import { Link} from 'react-router-dom';
import { TableContainer, TableRow, TableCell, TableCellInput, TableCellButton } from '../style';

const Login = () => {
    const { changeInputUserName, changeInputEndereço,changeInputCidade,changeInputCep,changeInputCpf,changeInputRg,changeInputNascimento, changeInputSenha,changeInputPais,changeInputConfirmar,changeInputEmail } = useUserController();

return(
    <Container>
       
        <H1> Realize o seu cadastro </H1>

        <ContainerItens>
            
                <tb>
                    <td><Input onchange={changeInputUserName}placeholder="Usuário"type="text"/>   </td>
                    <td><Input onChange={changeInputCpf} placeholder="CPF" type="text" /></td>
                    <td><Input onChange={changeInputRg} placeholder="RG" type="text"/>        </td>           
                    <td><Input onChange={changeInputNascimento} placeholder="Nascimento" type='date' /></td>   
                    </tb>
                <tb>
                    <td><Input onChange={changeInputEndereço} placeholder="Endereço"type="text" /></td>
                    <td><Input onChange={changeInputCidade} placeholder="Cidade"type="text" /></td>
                    <td><Input onChange={changeInputCep} placeholder="CEP" /></td>
                    <td><Input onChange={changeInputPais} placeholder="País" type="text"/></td>          
                </tb>

                <tb>
                    <td><Input onChange={changeInputEmail} placeholder="e-mail" type='e-mail'/></td>
                    <td><Input onChange={changeInputSenha} placeholder="Senha" type="password" /> </td>        
                    <td><Input onChange={changeInputConfirmar} placeholder="Confirmar senha"type="password"/></td>
                    <td><Link to="/home"> <Button> Confirmar </Button>  </Link></td>
                </tb>
            
            
            
            
          
      
  
      

        </ContainerItens>
  
    
        <Image alt="logo-imagem" src={Avatar} />

    </Container>
    
);

};

export default Login;