import styled from 'styled-components';

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;
`;

export const ImgLogo = styled.div`
  background-image: url('/src/assets/images/logo.png');
  width: 351px;
  height: 117px;
`;

export const Img = styled.img`
  z-index: 1;
`;

// @media screen and (max-width: 800px) {
//   .cabecalho {
//       padding-top: 60px;
//       flex-direction: column;
//       align-items: center;
//   }

//   .imagem-logo {
//       background-image: url("/public/imagens/logo-pequeno.png");
//       width: 235px;
//       height: 199px;
//   }
// }
