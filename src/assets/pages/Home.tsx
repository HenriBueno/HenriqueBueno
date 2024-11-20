import { Box, Container, Typography } from "@mui/material";
import DefaultLayout from "../config/layout/DefaultLayout";
import Carrossel from "../components/Carrosel/Carrossel";
import TextTypewriter from "../components/TextTypewriter/TextTypewriter";
import ButtonDefault from "../components/ButtonDefault/ButtonDefault";
import CardImageLeft from "../components/CardImage/CardImage";
import SVG1 from "../Icons/image1.svg?raw";
import SVG2 from "../Icons/image2.svg?raw";
import SVG3 from "../Icons/image3.svg?raw";
import CssSvg from "../Icons/CSSSvg.svg?raw";
import HtmlSvg from "../Icons/HTML5Svg.svg?raw";
import JsSvg from "../Icons/JsSvg.svg?raw";
import ReactSvg from "../Icons/ReactSvg.svg?raw";
import TsSvg from "../Icons/TypescriptSvg.svg?raw";

function Home() {
  return (
    <>
      <Container sx={{ padding: "2rem" }}>
        <DefaultLayout />

        <Box
          sx={{
            paddingTop: "em",
            textAlign: "start",
            height: "80vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Typography
              color="white"
              fontSize={"5em"}
              fontWeight={"bold"}
              fontFamily={"arial"}
            >
              Bem vindo ao
            </Typography>
            <Typography
              color="white"
              fontSize={"5em"}
              fontWeight={"bold"}
              fontFamily={"arial"}
            >
              <TextTypewriter
                text="meu portfólio!"
                typingSpeed={200} // Velocidade da digitação
                deletingSpeed={250} // Velocidade do apagamento
              />
            </Typography>
            <Box sx={{ marginTop: "50px" }}>
              <ButtonDefault text="Sobre mim"/>
            </Box>
          </Box>
          <Box sx={{ width: "45%" }}>
            <Carrossel svgList={[SVG1, SVG2, SVG3]} />
          </Box>
        </Box>
        <Box>
          <CardImageLeft
            title="Sobre mim"
            content={`Olá, meu nome é Henrique. Sou estudante de Full Stack na GROWDEV e
            estou cursando Análise e Desenvolvimento de Sistemas na UNISINOS.
            \n
            Gosto de desafios, e acredito que isso me motiva ainda mais em minha
            jornada.
            \n
            Acredito que o contínuo surgimento de novas tecnologias e abordagens
            torna este campo cada vez mais fascinante a cada dia.`}
            image="public/avatar.png"
            imagePosition="left"
          />
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <CardImageLeft
            title="Minhas habilidades"
            content={`Sou especializado em  HTML5, CSS3, Javascrip, Typescript, React entre muitas outras tecnologias.
            \n
            Atualmente, estou em busca de um novo emprego em Full Stack,
            \n
            `}
            carrossel={<Carrossel svgList={[ HtmlSvg, CssSvg, JsSvg, TsSvg, ReactSvg ]}/>}
            imagePosition="right"
          />
        </Box>
      </Container>
    </>
  );
}

export default Home;
