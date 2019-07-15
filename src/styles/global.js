import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
<<<<<<< HEAD
  box-sizing: border-box;
  outline:0;
}
html, body, #root {
  height: 100%;
=======
  box-sizing: border-box; /*faz o padding não contar na largura do componente*/
  outline:0;
}
html, body, #root {
  height: 100%; /*Ocupa 100% sem position absolute*/
>>>>>>> fdaaa92e3de33e440a35527d399ac0a55d76ab8f
}
body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  background: #181818;
  font-family: 'Montserrat', sans-serif;
  color: #FFF;
}
`;

export default GlobalStyle;
