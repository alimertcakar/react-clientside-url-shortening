import React from 'react';
import { Container } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import Routes from "./components/Router/router.component";
function App() {
  return (
    <StylesProvider injectFirst>
      <Container>
        <Routes />
      </Container>
    </StylesProvider>
  );
}

export default App;
