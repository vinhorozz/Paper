import React from 'react';
import React from 'react';
import { TableContainer, TableRow, TableCell, TableCellInput, TableCellButton } from '../style';
import { useUserController } from '../controllers/UserController';

const CadastroForm = () => {
  const {
    changeInputUserName,
    changeInputCpf,
    changeInputRg,
    changeInputNascimento,
    changeInputEndereço,
    changeInputCidade,
    changeInputCep,
    changeInputPais,
    changeInputEmail,
    changeInputSenha,
    changeInputConfirmar,
  } = useUserController();

  return (
    <TableContainer>
      <TableRow>
        <TableCell>
          <TableCellInput onChange={changeInputUserName} placeholder="Usuário" type="text" />
        </TableCell>
        <TableCell>
          <TableCellInput onChange={changeInputCpf} placeholder="CPF" type="text" />
        </TableCell>
        <TableCell>
          <TableCellInput onChange={changeInputRg} placeholder="RG" type="text" />
        </TableCell>
        <TableCell>
          <TableCellInput onChange={changeInputNascimento} placeholder="Nascimento" type="date" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <TableCellInput onChange={changeInputEndereço} placeholder="Endereço" type="text" />
        </TableCell>
        <TableCell>
          <TableCellInput onChange={changeInputCidade} placeholder="Cidade" type="text" />
        </TableCell>
        <TableCell>
          <TableCellInput onChange={changeInputCep} placeholder="CEP" />
        </TableCell>
        <TableCell>
          <TableCellInput onChange={changeInputPais} placeholder="País" type="text" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <TableCellInput onChange={changeInputEmail} placeholder="e-mail" type="email" />
        </TableCell>
        <TableCell>
          <TableCellInput onChange={changeInputSenha} placeholder="Senha" type="password" />
        </TableCell>
        <TableCell>
          <TableCellInput onChange={changeInputConfirmar} placeholder="Confirmar senha" type="password" />
        </TableCell>
        <TableCell>
          <TableCellButton to="/home">Confirmar</TableCellButton>
        </TableCell>
      </TableRow>
    </TableContainer>
  );
};

export default CadastroForm;
