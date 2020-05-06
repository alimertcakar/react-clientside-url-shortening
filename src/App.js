import React from 'react';
import { Container } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

import Shortener from "./components/URL Shortener/shortener.component";
function App() {
  return (
    <StylesProvider injectFirst>
      <Container>
        <Shortener link={"#"} />
      </Container>
    </StylesProvider>
  );
}

export default App;
