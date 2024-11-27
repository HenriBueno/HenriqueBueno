import { Box, Container, Icon, Typography } from "@mui/material";
import DefaultLayout from "../config/layout/DefaultLayout";
import Carrossel from "../components/Carrosel/Carrossel";
import TextTypewriter from "../components/TextTypewriter/TextTypewriter";
import ButtonDefault from "../components/ButtonDefault/ButtonDefault";
import CardMain from "../components/CardMain/CardMain";
import Icons from "../Icons/AllIcons";

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
              <ButtonDefault
                width="200px"
                height="50px"
                text="Sobre mim"
                borderRadius="30px"
                background="linear-gradient(90deg, rgba(179,60,242,1) 14%, rgba(240,60,242,1) 33%, rgba(242,60,213,1) 52%, rgba(242,60,113,1) 66%)"
              />
            </Box>
          </Box>
          <Box sx={{ width: "45%" }}>
            <Carrossel svgList={[Icons.SVG1, Icons.SVG2, Icons.SVG3]} />
          </Box>
        </Box>
        <Box>
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
            image="public/avatar.png"
            imagePosition="left"
          />
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <CardMain
            title="Minhas habilidades"
            content={`Sou apaixonado por desenvolver automações utilizando Python e especializado em tecnologias como HTML5, CSS3, JavaScript, TypeScript, React, entre outras.
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
          <Box width="90%" display="flex" justifyContent="center" marginBottom="20px">
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              width: "90%",
              flexWrap: "wrap",
              gap: "50px",
            }}
          >
            <Box>
              <ButtonDefault
                height="100px"
                width="160px"
                text="Python"
                color="#9340ff"
                borderRadius="30px 0px 0px 0px"
                background="#13131f"
                border="solid 3px "
                icon={
                  <span
                    dangerouslySetInnerHTML={{ __html: Icons.PythonIcon }}
                  />
                }
              />
            </Box>
            <Box>
              <ButtonDefault
                height="100px"
                width="160px"
                text="HTML5"
                color="#9340ff"
                borderRadius="30px 0px 0px 0px"
                background="#13131f"
                border="solid 3px "
                icon={
                  <span
                    dangerouslySetInnerHTML={{ __html: Icons.htmlIcon }}
                  />
                }
              />
            </Box>
            <Box>
              <ButtonDefault
                height="100px"
                width="160px"
                text="CSS3"
                color="#9340ff"
                borderRadius="30px 0px 0px 0px"
                background="#13131f"
                border="solid 3px "
                icon={
                  <span
                    dangerouslySetInnerHTML={{ __html: Icons.CSS3 }}
                  />
                }
              />
            </Box>
            <Box>
              <ButtonDefault
                height="100px"
                width="160px"
                text="Bootstrap"
                color="#9340ff"
                borderRadius="30px 0px 0px 0px"
                background="#13131f"
                border="solid 3px "
                icon={
                  <span
                    dangerouslySetInnerHTML={{ __html: Icons.Ts }}
                  />
                }
              />
            </Box>
            <Box>
              <ButtonDefault
                height="100px"
                width="160px"
                text="Javascript"
                color="#9340ff"
                borderRadius="30px 0px 0px 0px"
                background="#13131f"
                border="solid 3px "
                icon={
                  <span
                    dangerouslySetInnerHTML={{ __html: Icons.Js }}
                  />
                }
              />
            </Box>
            <Box>
              <ButtonDefault
                height="100px"
                width="160px"
                text="Git"
                color="#9340ff"
                borderRadius="30px 0px 0px 0px"
                background="#13131f"
                border="solid 3px "
                icon={
                  <span
                    dangerouslySetInnerHTML={{ __html: Icons.Git }}
                  />
                }
              />
            </Box>
            <Box>
              <ButtonDefault
                height="100px"
                width="160px"
                text="Node js"
                color="#9340ff"
                borderRadius="30px 0px 0px 0px"
                background="#13131f"
                border="solid 3px "
                icon={
                  <span
                    dangerouslySetInnerHTML={{ __html: Icons.Node }}
                  />
                }
              />
            </Box>
            <Box>
              <ButtonDefault
                height="100px"
                width="160px"
                text="Next"
                color="#9340ff"
                borderRadius="30px 0px 0px 0px"
                background="#13131f"
                border="solid 3px "
                icon={
                  <span
                    dangerouslySetInnerHTML={{ __html: Icons.Next }}
                  />
                }
              />
            </Box>
            <Box>
              <ButtonDefault
                height="100px"
                width="160px"
                text="React"
                color="#9340ff"
                borderRadius="30px 0px 0px 0px"
                background="#13131f"
                border="solid 3px "
                icon={
                  <span
                    dangerouslySetInnerHTML={{ __html: Icons.React }}
                  />
                }
              />
            </Box>
            <Box>
              <ButtonDefault
                height="100px"
                width="160px"
                text="Redux"
                color="#9340ff"
                borderRadius="30px 0px 0px 0px"
                background="#13131f"
                border="solid 3px "
                icon={
                  <span
                    dangerouslySetInnerHTML={{ __html: Icons.Redux }}
                  />
                }
              />
            </Box>
            <Box>
              <ButtonDefault
                height="100px"
                width="160px"
                text="PostgreSQL"
                color="#9340ff"
                borderRadius="30px 0px 0px 0px"
                background="#13131f"
                border="solid 3px "
                icon={
                  <span
                    dangerouslySetInnerHTML={{ __html: Icons.SQL }}
                  />
                }
              />
            </Box>
            <Box>
              <ButtonDefault
                height="100px"
                width="160px"
                text="TypeScript"
                color="#9340ff"
                borderRadius="30px 0px 0px 0px"
                background="#13131f"
                border="solid 3px "
                icon={
                  <span
                    dangerouslySetInnerHTML={{ __html: Icons.Bootstrap }}
                  />
                }
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Home;
