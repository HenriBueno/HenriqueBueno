import { Container, Box } from "@mui/material";

interface CardIconProps{
    icon: React.ReactNode;
    title: string;
}

function CardIcon({icon, title}: CardIconProps) {
  return (
    <>
      <Container sx={{height: ''}}>
        <Box>{icon}</Box>
        <Box>{title}</Box>
      </Container>
    </>
  );
}
export default CardIcon;
