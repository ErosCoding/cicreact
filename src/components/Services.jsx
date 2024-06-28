import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

function Servicos() {
  return (
    <Section id="servicos">
      <h2>Nossos Serviços</h2>
      <p>Oferecemos consultoria, treinamentos e soluções personalizadas para o gerenciamento de custos.</p>
    </Section>
  );
}

export default Servicos;
