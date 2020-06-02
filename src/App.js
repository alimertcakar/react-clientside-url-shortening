import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import Routes from "./components/Router/router.component";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
  margin:0
  }
`

function App() {
  return (
    <StylesProvider injectFirst>
      <Routes />
      <GlobalStyle />
    </StylesProvider>
  );
}

export default App;
