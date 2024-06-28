import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <p>&copy; 2024 Centro de Informação de Custos. Todos os direitos reservados.</p>
      </div>
    </FooterContainer>
  );
}

export default Footer;
