import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface ButtonDefaultProps {
  color?: string;
  text?: string;
}

export default function BasicButtons({ color, text }: ButtonDefaultProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        sx={{
          color: color || "#390e61",
          fontWeight: "bold",
          fontSize:"1.2em",
          fontFamily:"arial",
          background:
            "linear-gradient(90deg, rgba(179,60,242,1) 14%, rgba(240,60,242,1) 33%, rgba(242,60,213,1) 52%, rgba(242,60,113,1) 66%)",
          height:"50px",
          width:"200px",
          borderRadius:"30px",
          textTransform: "capitalize",
          "&:hover":{
              color:"white",
              scale:"1.1",
              transition: "0.5s",
            },
          
        }}
      >
        {text || "Sobre mim"}
      </Button>
    </Stack>
  );
}
