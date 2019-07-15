import React from 'react';
import GlobalStyle from './styles/global';
import 'rc-slider/assets/index.css';
import { Wrapper, Container } from './styles/components';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <Sidebar />
    </Container>
    <Player />
  </Wrapper>
);

export default App;
