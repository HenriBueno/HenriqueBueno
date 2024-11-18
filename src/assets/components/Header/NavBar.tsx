import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function NavBar() {
  return (
    <Container
      maxWidth={false}
      sx={{ display: "flex", alignItems: "center", width:'100%' }}
    >
      <Box>
        <img
          src="public\Icons\Cubo-Magico.gif"
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
          Henrique Bueno
        </Typography>
      </Box>
    </Container>
  );
}

export default NavBar;
