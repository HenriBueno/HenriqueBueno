import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface MediaControlCardProps {
  imagePosition?: "left" | "right";
  image?: string;
  title: string;
  content: string;
  carrossel?: React.ReactNode;
}

export default function MediaControlCard({
  imagePosition = "left",
  image,
  content,
  title,
  carrossel,
}: MediaControlCardProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: imagePosition === "right" ? "row-reverse" : "row",
        height: "50vh",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      {image ? (
        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              backgroundColor: "white",
              borderRadius: "30px",
              boxShadow: theme.shadows[5],
              transition: "transform 0.3s",
            }}
            image={image}
          />
        </Box>
      ) : (
        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {carrossel}
        </Box>
      )}

      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "start",
        }}
      >
        <CardContent
          sx={{
            flex: "1 0 auto",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            color="#9340ff"
            fontSize="2em"
            fontWeight={700}
            mb={2}
          >
            {title}
          </Typography>

          {content.split("\n").map((line, index) => (
            <Typography
              key={index}
              variant="subtitle1"
              component="div"
              sx={{ color: "white", fontSize: "1.2em" }}
            >
              {line}
            </Typography>
          ))}
        </CardContent>
      </Box>
    </Card>
  );
}
