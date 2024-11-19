import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        height: "50vh",

        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
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
            backgroundColor:'white',
            borderRadius: "30px",
            boxShadow: theme.shadows[5],
            transition: "transform 0.3s",
           
          }}
          image="public/avatar.png"
          alt="Live from space album cover"
        />
      </Box>

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
            Sobre mim
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "white", fontSize: "1.2em"}}
          >
            Olá, meu nome é Henrique. Sou estudante de Full Stack na GROWDEV e
            estou cursando Análise e Desenvolvimento de Sistemas na UNISINOS.
            <br />
            Gosto de desafios, e acredito que isso me motiva ainda mais em minha
            jornada.
            <br />
            Acredito que o contínuo surgimento de novas tecnologias e abordagens
            torna este campo cada vez mais fascinante a cada dia.
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
