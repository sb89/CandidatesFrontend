import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const Main = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar bg="primary" expand="lg" id="main-nav">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Candidates Application</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbar" />

          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto" activeKey="/">
              <LinkContainer to="/candidates">
                <Nav.Link>Candidates</Nav.Link>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      <div>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Main;