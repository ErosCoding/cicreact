import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 0.5rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  display: block;
  transition: background 0.3s;
  &:hover {
    background: #575757;
  }
`;

function Navigation() {
  return (
    <Nav>
      <div className="container">
        <NavList>
          <NavItem><NavLink href="#home">Home</NavLink></NavItem>
          <NavItem><NavLink href="#sobre">Sobre</NavLink></NavItem>
          <NavItem><NavLink href="#servicos">Serviços</NavLink></NavItem>
          <NavItem><NavLink href="#contato">Contato</NavLink></NavItem>
        </NavList>
      </div>
    </Nav>
  );
}

export default Navigation;
