import { Grid2, Typography } from "@mui/material";
import { useEffect, useRef, ReactNode } from "react";

interface NavBarProps {
  text: string;
  svg?: ReactNode; // Aceita um componente React ou JSX como prop
}

function NavBar({ text, svg }: NavBarProps) {
  const svgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = svgRef.current;
    if (!element) return;

    let rotation = 0;
    const interval = setInterval(() => {
      rotation += 1;
      element.style.transform = `rotate(${rotation}deg)`;
    }, 64); 

    return () => clearInterval(interval); 
  }, []);

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
        <div
          ref={svgRef}
          style={{
            height: "80px",
            maxHeight: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          dangerouslySetInnerHTML={{ __html: svg || '' }}
        >
        </div>
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
