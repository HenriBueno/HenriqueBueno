import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PerfilImageStyled from "./PerfilImageStyled";

function PerfilImage() {
  return (
    <>
      <Container>
        <Box >
          <PerfilImageStyled alt="Henrique Bueno" src="public/avatar.png" className="perfil-Image"/>
        </Box>
      </Container>
    </>
  );
}

export default PerfilImage;
