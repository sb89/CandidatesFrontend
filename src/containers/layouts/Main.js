import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const Main = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar bg="primary" expand="lg" id="main-nav">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Candidates Application</Navbar.Brand>
          </LinkContainer>

        </Container>
      </Navbar>
      <div>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Main;