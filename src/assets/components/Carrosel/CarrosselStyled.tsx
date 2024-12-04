import styled from "styled-components";

const CarrosselStyled = styled.div<{ scale?: string }>`
  .embla {
    overflow: hidden;
    width: 100%;
    cursor: grab;
    &:active{
      cursor: grabbing;
    }
  }

  .embla__container {
    display: flex;
    flex-direction: row; 
    width: 100%;
  }

  .embla__slide {
    flex: 0 0 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto; 
    min-width: 0; 
  }

  svg {
    max-width: 100%;
    height: auto;
    scale: ${({ scale }) => scale || 'auto'};
  }
`;

export default CarrosselStyled;
