import React from "react";
import { Card, Container, Tab, Tabs } from "react-bootstrap";
import SkillsTab from "./tabs/Skills";
import DetailsTab from "./tabs/Details";


const CandidateScreen = () => {

    return (
      <Container className="main-container">
        <Card>
          <Card.Body>
            <Tabs fill variant="pills" defaultActiveKey="details" style={{marginBottom: 5}}>
              <Tab eventKey="details" title="Details">
                <DetailsTab />
              </Tab>

              <Tab eventKey="skills" title="Skills">
                <SkillsTab />
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Container>
    )
};

export default CandidateScreen;
