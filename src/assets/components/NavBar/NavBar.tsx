import { Grid2, Typography } from "@mui/material";

interface NavBarProps {
  text: string;
}

function NavBar({ text }: NavBarProps) {
  return (
    <Grid2
      container
      alignItems="center"
      sx={{ width: "100%", padding: "10px" }}
    >
      <Grid2
        size={{ xs: 6, sm: 2 }}
        sx={{ textAlign: { xs: "center", sm: "start" } }}
      >
        <img
          src="src/assets/Icons/Cubo-Magico.gif"
          alt="Logo"
          style={{
            height: "80px",
            maxHeight: "100px",
          }}
        />
      </Grid2>

      <Grid2
        size={{ xs: 6, sm: 10 }}
        sx={{
          textAlign: { xs: "center", sm: "start" },
          marginTop: { xs: "10px", sm: "0px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "arial",
            fontWeight: "bold",
            fontSize: { xs: "1rem", sm: "1.5rem" },
            color: "#ffffff",
          }}
        >
          {text}
        </Typography>
      </Grid2>
    </Grid2>
  );
}

export default NavBar;
