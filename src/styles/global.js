import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box; /*faz o padding não contar na largura do componente*/
  outline:0;
}
html, body, #root {
  height: 100%; /*Ocupa 100% sem position absolute*/
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
