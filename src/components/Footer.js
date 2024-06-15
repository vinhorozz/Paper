import React from 'react';
import { FooterContainer, FooterSection, FooterTitle, FooterText } from '../style';

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <FooterSection>
          <FooterTitle>Endereço</FooterTitle>
          <FooterText>Rua Fictícia, 123</FooterText>
          <FooterText>Bairro Imaginário</FooterText>
          <FooterText>Cidade Exemplo, EX 12345-678</FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <FooterText>Telefone: (11) 1234-5678</FooterText>
          <FooterText>Email: contato@exemplo.com</FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Informações ao Consumidor</FooterTitle>
          <FooterText>Política de Privacidade</FooterText>
          <FooterText>Termos de Serviço</FooterText>
          <FooterText>Direitos do Consumidor</FooterText>
        </FooterSection>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
