import React from 'react';
import '~/config/DevTools';
import '~/config/Reactotron';
import '~/config/StatusBarConfig';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import Player from './components/Player';

const App = () => (
  <Provider store={store}>
    <Routes />
    <Player />
  </Provider>
);
export default App;
