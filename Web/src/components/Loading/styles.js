import styled, { keyframes } from 'styled-components';

export const rotate360 = keyframes` /* fUNÇÃO PARA ADIÇÃO DE animação por css*/
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;
export const Spinner = styled.img`
  animation: ${rotate360} 2s linear infinite;
`;
