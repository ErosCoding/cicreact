import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

function Sobre() {
  return (
    <Section id="sobre">
      <h2>Sobre Nós</h2>
      <p>O Centro de Informação de Custos é dedicado a fornecer as melhores informações e ferramentas para o gerenciamento de custos.</p>
    </Section>
  );
}

export default Sobre;
