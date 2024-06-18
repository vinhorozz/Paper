//src\components\Tabelas.js
import React, {useState} from 'react';
import { TableContainer, TableRow, TableCell, TableCellInput, TableCellButton, Button} from '../style';
import { useUserController } from '../controllers/UserController';
import { useNavigate } from 'react-router-dom';


const CadastroForm = () => {
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

    const navigate=useNavigate();

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
    <TableContainer>
      <TableRow>
              <TableCell>
                <TableCellInput name="userName" onChange={handleInputChange} placeholder="Usuário" type="text" />
              </TableCell>
                      <TableCell>
                        <TableCellInput name="cpf" onChange={handleInputChange} placeholder="CPF" type="text" />
                      </TableCell>
                            <TableCell>
                              <TableCellInput name="rg" onChange={handleInputChange} placeholder="RG" type="text" />
                            </TableCell>
                                  <TableCell>
                                    <TableCellInput name="nascimento" onChange={handleInputChange} placeholder="Nascimento" type="text" />
                                  </TableCell>
      </TableRow>
      <TableRow>
              <TableCell>
                <TableCellInput name="endereco" onChange={handleInputChange} placeholder="Endereço" type="text" />
              </TableCell>
                      <TableCell>
                        <TableCellInput name="cidade"onChange={handleInputChange} placeholder="Cidade" type="text" />
                      </TableCell>
                            <TableCell>
                              <TableCellInput name="cep" onChange={handleInputChange} placeholder="CEP" />
                            </TableCell>
                                  <TableCell>
                                    <TableCellInput name="pais"onChange={handleInputChange}  placeholder="País" type="text" />
                                  </TableCell>
      </TableRow>
      <TableRow>
            <TableCell>
              <TableCellInput name="email"  onChange={handleInputChange}  placeholder="e-mail" type="email" />
            </TableCell>
                      <TableCell>
                        <TableCellInput name="senha" onChange={handleInputChange} placeholder="Senha" type="password" />
                      </TableCell>
                            <TableCell>
                              <TableCellInput name="confirmarSenha" onChange={handleInputChange} placeholder="Confirmar senha" type="password" />
                            </TableCell>
                                  <TableCell>
                                    <TableCellButton onClick={handleConfirmClick}>Confirmar</TableCellButton>
                                  </TableCell>
      </TableRow>
    </TableContainer>
  );
};

export default CadastroForm;
