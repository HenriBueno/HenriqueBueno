import { Box, Container,} from "@mui/material";
import DefaultLayout from "../config/layout/DefaultLayout";

function Home() {

  return (
    <>
      <Container sx={{ padding: "2rem" }}>
        <DefaultLayout />
      </Container>
    </>
  );
}

export default Home;
