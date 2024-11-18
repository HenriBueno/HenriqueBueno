import styled from "styled-components";

const CarrosselStyled = styled.div`
  .embla {
    overflow: hidden;
    width: 100%;
    height: 100%; /* Define uma altura para o carrossel */
  }
  
  .embla__container {
    display: flex;
    height: 100%; /* Garante que os slides ocupem toda a altura do carrossel */
  }
  
  .embla__slide {
    flex: 0 0 100%;
    min-width: 100%;
    height: 100%; /* Garante que os slides ocupem toda a altura do carrossel */
    display: flex;
    justify-content: center; /* Centraliza os conteúdos dentro do slide */
    align-items: center; /* Alinha o conteúdo verticalmente */
    background-color: transparent; /* Cor de fundo temporária para depuração */
    
  }

  .embla__slide svg {
    width: 100%; /* Faz com que o SVG ocupe toda a largura do slide */
    height: auto; /* Mantém a proporção do SVG */
  }
`;

export default CarrosselStyled;
