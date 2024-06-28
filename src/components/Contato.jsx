import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 0.5rem 0 0.25rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`;

const Button = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #45a049;
  }
`;

function Contato() {
  return (
    <Section id="contato">
      <h2>Contato</h2>
      <Form id="contact-form">
        <Label htmlFor="name">Nome:</Label>
        <Input type="text" id="name" name="name" required />
        
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" required />
        
        <Label htmlFor="message">Mensagem:</Label>
        <Textarea id="message" name="message" required />
        
        <Button type="submit">Enviar</Button>
      </Form>
    </Section>
  );
}

export default Contato;
