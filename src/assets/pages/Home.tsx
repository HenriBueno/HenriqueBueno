import { Box, Container, Grid2, Link, Typography } from "@mui/material";
import DefaultLayout from "../config/layout/DefaultLayout";
import Carrossel from "../components/Carrosel/Carrossel";
import TextTypewriter from "../components/TextTypewriter/TextTypewriter";
import ButtonDefault from "../components/ButtonDefault/ButtonDefault";
import CardMain from "../components/CardMain/CardMain";
import Icons from "../Icons/AllIcons";
import { Email, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";

function Home() {
  return (
    <>
      <Container sx={{ padding: "2rem" }}>
        <DefaultLayout />

        <Grid2
          container
          sx={{
            paddingTop: "1em",
            height: "80vh",
            alignItems: "center",
          }}
        >
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Typography
              color="white"
              fontSize={{ xs: "2.5em", sm: "4em", md: "5em" }}
              fontWeight="bold"
              fontFamily="arial"
            >
              Bem vindo ao
            </Typography>
            <Typography
              color="white"
              fontSize={{ xs: "2.5em", sm: "4em", md: "5em" }}
              fontWeight="bold"
              fontFamily="arial"
            >
              <TextTypewriter
                text="meu portfólio!"
                typingSpeed={200}
                deletingSpeed={250}
              />
            </Typography>
            <Box sx={{ marginTop: "30px" }}>
              <ButtonDefault
                width='{ xs: "150px", sm: "180px", md: "200px" }'
                justify="start"
                height="50px"
                text="Sobre mim"
                borderRadius="30px"
                background="linear-gradient(90deg, rgba(179,60,242,1) 14%, rgba(240,60,242,1) 33%, rgba(242,60,213,1) 52%, rgba(242,60,113,1) 66%)"
                onClick={() => {
                  const aboutSection = document.getElementById("sobre");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </Box>
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{
              marginTop: { xs: "30px", md: 0 },
            }}
          >
            <Carrossel svgList={[Icons.SVG1, Icons.SVG2, Icons.SVG3]} />
          </Grid2>
        </Grid2>

        <Box id="sobre" sx={{ marginTop: "100px" }}>
          <CardMain
            title="Sobre mim"
            content={`Olá, meu nome é Henrique. Sou estudante de Full Stack na GROWDEV e
            estou cursando Análise e Desenvolvimento de Sistemas na UNISINOS.
            \n
            Gosto de desafios, e acredito que isso me motiva ainda mais em minha
            jornada.
            \n
            Acredito que o contínuo surgimento de novas tecnologias e abordagens
            torna este campo cada vez mais fascinante a cada dia.`}
            image={Icons.HenriqueImage}
            background="white"
            imagePosition="left"
          />
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <CardMain
            title="Minhas habilidades"
            content={`Sou fascinado em desenvolver automações utilizando Python e especializado em tecnologias como HTML5, CSS3, JavaScript, TypeScript, React, entre outras.
            \n
            Sempre busco aprimorar minhas habilidades e explorar novas ferramentas para entregar soluções eficientes e inovadoras.
            `}
            carrossel={
              <Carrossel
                scale="2.5"
                slideTiming="2500"
                svgList={[
                  Icons.PythonSvg,
                  Icons.HtmlSvg,
                  Icons.CssSvg,
                  Icons.JsSvg,
                  Icons.TsSvg,
                  Icons.ReactSvg,
                ]}
              />
            }
            imagePosition="right"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            marginTop: "50px",
          }}
        >
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            marginBottom="20px"
          >
            <Typography
              component="div"
              variant="h5"
              color="white"
              fontSize="2em"
              fontWeight={700}
              mb={2}
            >
              Habilidades
            </Typography>
          </Box>
          <Grid2 container spacing={2} justifyContent="center" gap="50px">
            {[
              { text: "Python", icon: Icons.PythonIcon },
              { text: "HTML5", icon: Icons.htmlIcon },
              { text: "CSS3", icon: Icons.CSS3 },
              { text: "Bootstrap", icon: Icons.Bootstrap },
              { text: "Javascript", icon: Icons.Js },
              { text: "Git", icon: Icons.Git },
              { text: "Node js", icon: Icons.Node },
              { text: "Next", icon: Icons.Next },
              { text: "React", icon: Icons.React },
              { text: "Redux", icon: Icons.Redux },
              { text: "PostgreSQL", icon: Icons.SQL },
              { text: "TypeScript", icon: Icons.Ts },
            ].map(({ text, icon }, index) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <ButtonDefault
                    height="100px"
                    width="160px"
                    text={text}
                    color="#9340ff"
                    borderRadius="30px 0px 0px 0px"
                    background="#13131f"
                    border="solid 3px"
                    cursor="auto"
                    icon={<span dangerouslySetInnerHTML={{ __html: icon }} />}
                  />
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box>

        <Box
          sx={{
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <CardMain
            title="Projetos"
            content="Em desenvolvimento ..."
            background="trasparent"
            image={Icons.WorkingSvg}
            imagePosition="left"
          />
        </Box>
        <Box sx={{ marginBottom: "100px" }}>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            marginBottom="20px"
          >
            <Typography
              component="div"
              width="100%"
              variant="h5"
              color="white"
              fontSize="2em"
              textAlign="center"
              fontWeight={700}
              mb={2}
            >
              Contatos
            </Typography>
          </Box>

          <Grid2
            container
            spacing={4}
            justifyContent="center"
            sx={{ marginTop: "50px" }}
          >
            {[
              {
                href: "mailto:henriquetribueno@gmail.com",
                icon: <Email sx={{ fontSize: "40px" }} />,
                title: "E-mail",
                subtitle: "henriquetribueno@gmail.com",
              },
              {
                href: "https://wa.me/+555180374828?text=Olá%20Henrique!%20Vi%20seu%20portfólio.%20Vamos%20conversar?%20",
                icon: <WhatsApp sx={{ fontSize: "40px" }} />,
                title: "WhatsApp",
                subtitle: "+55 (51) 8037-4828",
              },
              {
                href: "https://www.linkedin.com/in/henrique-cavalheiro-bueno-6802a7248/",
                icon: <LinkedIn sx={{ fontSize: "40px" }} />,
                title: "LinkedIn",
                subtitle: "Henrique Bueno",
              },
              {
                href: "https://github.com/HenriBueno",
                icon: <GitHub sx={{ fontSize: "40px" }} />,
                title: "Github",
                subtitle: "@HenriBueno",
              },
            ].map((item, index) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    color="inherit"
                    sx={{
                      "&:hover": {
                        color: "white",
                        scale: "1.1",
                        transition: "0.5s",
                      },
                    }}
                  >
                    <ButtonDefault
                      height="100px"
                      width="100px"
                      color="#9340ff"
                      borderRadius="50%"
                      background="#13131f"
                      icon={item.icon}
                    />
                    <Typography
                      component="div"
                      variant="h5"
                      color="white"
                      fontWeight={500}
                      fontSize="1.2em"
                      mt={2}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      component="div"
                      variant="h5"
                      color="white"
                      fontWeight={500}
                      fontSize="1.2em"
                      mt={2}
                      sx={{ opacity: "0.5" }}
                    >
                      {item.subtitle}
                    </Typography>
                  </Link>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Container>
    </>
  );
}

export default Home;
