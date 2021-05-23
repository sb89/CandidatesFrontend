import { Container, Jumbotron } from "react-bootstrap";

const Home = () => {
  return(
    <Container fluid className="main-container">
      <Jumbotron className="text-center">
        <h1>Welcome to the Candidates Application</h1>
      </Jumbotron>
    </Container>

  );
};

export default Home;