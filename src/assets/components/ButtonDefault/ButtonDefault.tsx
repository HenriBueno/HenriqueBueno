
import ButtonDefaultStyled from "./ButtonDefaultStyled";

interface ButtonDefaultProps {
  color?: string;
  content?: string
}

function ButtonDefault({ color, content }: ButtonDefaultProps) {
  return (
    <ButtonDefaultStyled customColor={color}>
      {content}
    </ButtonDefaultStyled>
  );
}

export default ButtonDefault;
