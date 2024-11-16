import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

interface ButtonDefaultStyledProps {
  customColor?: string;
}

const ButtonDefaultStyled = styled(Button)<ButtonDefaultStyledProps>(({ customColor }) => ({
  backgroundColor: 'transparent',
  color: customColor || 'inherit',
  border: customColor ? `2px solid ${customColor}` : '2px solid #0c0b49',
  padding: '1em',
  borderRadius: '10px',
  fontFamily: 'Sour Gummy',
  textTransform: 'lowercase',
  fontSize: '1.3em',
  fontWeight: 'bold',

  '&:hover': {
    transition: '1s',
    backgroundColor: customColor ? `${customColor}` : 'transparent',
    color: 'black',
    scale: 1.1,
    boxShadow: `inset 13em 0 0 0 ${customColor}`,
  },
}));

export default ButtonDefaultStyled;
