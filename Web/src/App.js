import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'rc-slider/assets/index.css';
import './config/reactotron';
import { Wrapper, Container, Content } from './styles/components';
import GlobalStyle from './styles/global';
import store from './store';
import Routes from './routes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
