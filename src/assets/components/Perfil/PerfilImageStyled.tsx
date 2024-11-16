import styled from "styled-components";

const PerfilImageStyled = styled.img`
    height: 50%;
    object-fit: cover;
    border-radius: 10%;
    margin-bottom: 20px;

    animation: flicker-1 3s linear infinite both;

  @keyframes flicker-1 {
    0%, 100% {
      opacity: 1;
    }
    41.99% {
      opacity: 1;
    }
    42% {
      opacity: 0;
    }
    43% {
      opacity: 0;
    }
    43.01% {
      opacity: 1;
    }
    47.99% {
      opacity: 1;
    }
    48% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    49.01% {
      opacity: 1;
    }
  }

  &:hover {
    cursor: pointer;
    scale: 1.01;
  }


`;
export default PerfilImageStyled;
