import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function NavBar() {
  return (
    <Container
      maxWidth={false}
      sx={{ padding: 0, width: "100%", display: "flex", alignItems: "center" }}
    >
      <Box>
        <img
          src="public/Icons/icons8-computador-50.png"
          alt="Logo"
          style={{ width: "50px", height: "50px" }}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontWeight: 'bolder',
            fontSize: "2rem",
            color: "#ffffff",
            marginLeft: "2rem",
            
          }}
        >
          Henrique 
        </Typography>
      </Box>
    </Container>
  );
}

export default NavBar;
