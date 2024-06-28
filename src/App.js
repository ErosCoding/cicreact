import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
  }
  .container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    overflow: hidden;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

