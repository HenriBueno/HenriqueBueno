import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

interface ButtonDefaultProps {
  color?: string;
  text?: string;
  icon?: React.ReactNode;
  title?: string;
  height: string;
  width: string;
  borderRadius?: string;
  background?: string;
  border?: string;
  justify?: string;
  onClick?: () => void;
}

export default function BasicButtons({
  color,
  text,
  icon,
  title,
  height,
  width,
  borderRadius,
  background,
  border,
  justify,
  onClick,
}: ButtonDefaultProps) {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        display: "flex",
        justifyContent: {
          xs: justify === "center" ? "start" : "center",
          md: justify === "start" ? "start" : "center",
        },
      }}
    >
      <Button
        variant="contained"
        title={title}
        onClick={onClick}
        sx={{
          color: color || "#390e61",
          fontWeight: "bold",
          fontSize: "1.2em",
          fontFamily: "arial",
          background: background,
          height: { height },
          width: { width },
          borderRadius: { borderRadius },
          textTransform: "capitalize",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          borderBottom: border,
          "&:hover": {
            color: "white",
            scale: "1.1",
            transition: "0.5s",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Box>{icon}</Box>
          <Box>{text}</Box>
        </Box>
      </Button>
    </Stack>
  );
}
