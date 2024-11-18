import { Box, Container, Typography } from "@mui/material";
import DefaultLayout from "../config/layout/DefaultLayout";
import Carrossel from "../components/Carrosel/Carrossel";
import TypewriterEffect from "../components/TextTypewriter/TextTypewriter";

function Home() {
  return (
    <>
      <Container sx={{ padding: "2rem" }}>
        <DefaultLayout />
        <Box sx={{ paddingTop: "2rem", textAlign: "start", height:'80vh', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Box sx={{width:'50%', height:'30%'}}>
            <Typography color="white" fontSize={'5em'} fontWeight={'bold'} fontFamily={'arial'}>
              Bem vindo ao
            </Typography>
            <Typography color="white" fontSize={'5em'} fontWeight={'bold'} fontFamily={'arial'}>
            
            <TypewriterEffect
          text="meu portfólio!"
          typingSpeed={150} // Velocidade da digitação
          deletingSpeed={200} // Velocidade do apagamento
        />
            </Typography>
          </Box>
        <Box sx={{width:'40%'}}>
          <Carrossel/>
        </Box>
        </Box>
      </Container>
    </>
  );
}

export default Home;
