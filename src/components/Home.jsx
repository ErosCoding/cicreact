import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

function Home() {
  return (
    <Section id="home">
      <h2>Bem-vindo ao Centro de Informação de Custos</h2>
      <p>Aqui você encontrará todas as informações necessárias para entender e gerenciar seus custos de forma eficiente.</p>
    </Section>
  );
}

export default Home;
