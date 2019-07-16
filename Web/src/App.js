import React from 'react';
import { BrowserRouter } from 'react-router-dom'; /* Da o acesso aoc componentes filhos as rotas */
import GlobalStyle from './styles/global';
import 'rc-slider/assets/index.css';
import { Wrapper, Container, Content } from './styles/components';
import Routes from './routes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </BrowserRouter>
);

export default App;
