import React from 'react';
import GlobalStyle from './styles/global';
import 'rc-slider/assets/index.css';
import { Wrapper, Container, Content } from './styles/components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <Sidebar />
      <Content>
        <Header />
      </Content>
    </Container>
    <Player />
  </Wrapper>
);

export default App;
