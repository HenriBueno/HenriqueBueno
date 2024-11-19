import { Box, Container, Typography } from "@mui/material";
import DefaultLayout from "../config/layout/DefaultLayout";
import Carrossel from "../components/Carrosel/Carrossel";
import TextTypewriter from "../components/TextTypewriter/TextTypewriter";
import ButtonDefault from "../components/ButtonDefault/ButtonDefault";
import CardImageLeft from "../components/CardImageLeft/CardImageLeft";

function Home() {
  return (
    <>
      <Container sx={{ padding: "2rem" }}>
        <DefaultLayout />
2r        <Box sx={{paddingTop: "em", textAlign: "start", height:'80vh', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Box sx={{width:'50%'}}>
            <Typography color="white" fontSize={'5em'} fontWeight={'bold'} fontFamily={'arial'}>
              Bem vindo ao
            </Typography>
            <Typography color="white" fontSize={'5em'} fontWeight={'bold'} fontFamily={'arial'}>
            
            <TextTypewriter
          text="meu portfólio!"
          typingSpeed={200} // Velocidade da digitação
          deletingSpeed={250} // Velocidade do apagamento
        />
            </Typography>
            <Box sx={{marginTop:'50px'}}>

            <ButtonDefault/>
            </Box>
          </Box>
        <Box sx={{width:'45%'}}>
          <Carrossel/>
        </Box>
        </Box>
        <Box>
        <CardImageLeft />
        </Box>
      </Container>
    </>
  );
}

export default Home;
