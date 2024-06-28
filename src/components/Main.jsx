import React from 'react';
import Home from './Home';
import Sobre from './Sobre';
import Servicos from './Services';
import Contato from './Contato';
import styled from 'styled-components';

const MainContainer = styled.main`
  padding: 2rem 0;
`;

function Main() {
  return (
    <MainContainer>
      <div className="container">
        <Home />
        <Sobre />
        <Servicos />
        <Contato />
      </div>
    </MainContainer>
  );
}

export default Main;
