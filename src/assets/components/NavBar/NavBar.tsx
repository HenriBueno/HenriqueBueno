import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

interface NavBarProps{
  text: string
}

function NavBar({text}: NavBarProps) {
  return (
    <Container
      maxWidth={false}
      sx={{ display: "flex", alignItems: "center", width:'100%' }}
    >
      <Box>
        <img
          src="src/assets/Icons/Cubo-Magico.gif"
          alt="Logo"
          style={{ height: "100px" }}
        />
      </Box>

      <Box>
        <Typography
          sx={{
            fontFamily: "arial",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#ffffff",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Container>
  );
}

export default NavBar;
