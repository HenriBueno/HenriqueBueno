import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid2 } from "@mui/material";

interface CardMainProps {
  imagePosition?: "left" | "right";
  image?: string;
  title: string;
  content?: string;
  carrossel?: React.ReactNode;
  background?: string;
}

export default function CardMain({
  imagePosition = "left",
  image,
  content,
  title,
  carrossel,
  background,
}: CardMainProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
        backgroundColor: "transparent",
        padding: "20px",
      }}
    >
      <Grid2
        container
        spacing={2}
        sx={{
          flexDirection: {
            xs: "column",
            md: imagePosition === "right" ? "row-reverse" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            width: "100%",
          },
        }}
      >
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {image ? (
            <CardMedia
              component="img"
              sx={{
                maxHeight: "80%",
                maxWidth: "80%",
                objectFit: "contain",
                backgroundColor:
                  background === "transparent" ? "transparent" : background,
                borderRadius: "30px",
                boxShadow: theme.shadows[5],
                transition: "transform 0.3s",
              }}
              image={image}
            />
          ) : (
            carrossel
          )}
        </Grid2>

        <Grid2
          size={{ xs: 12, md: 8 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardContent
            sx={{
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Typography
              component="div"
              variant="h5"
              color="#9340ff"
              fontSize={{ xs: "1.5em", md: "2em" }}
              fontWeight={700}
              mb={2}
            >
              {title}
            </Typography>

            {content?.split("\n").map((line, index) => (
              <Typography
                key={index}
                variant="subtitle1"
                component="div"
                sx={{ color: "white", fontSize: { xs: "1em", md: "1.2em" } }}
              >
                {line}
              </Typography>
            ))}
          </CardContent>
        </Grid2>
      </Grid2>
    </Card>
  );
}
