import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #4CAF50;
  color: white;
  padding: 1rem 0;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <HeaderTitle>Centro de Informação de Custos</HeaderTitle>
      </div>
    </HeaderContainer>
  );
}

export default Header;
