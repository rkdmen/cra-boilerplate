import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Hello from './components/Hello/Hello';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const StyledApp = styled.div`
  color: green;
`;

function App() {
  return (
    <StyledApp className="App">
      <GlobalStyle />
      <Hello />
    </StyledApp>
  );
}

export default App;
