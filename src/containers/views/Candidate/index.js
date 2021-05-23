import React from "react";
import { Card, Container, Tab, Tabs } from "react-bootstrap";
import SkillsTab from "./tabs/Skills";
import DetailsTab from "./tabs/Details";
import { useParams } from "react-router";


const CandidateScreen = () => {
  const { id } = useParams();

  return (
    <Container className="main-container">

      <Card>
        <Card.Body>
          <Tabs fill variant="pills" defaultActiveKey="details" style={{ marginBottom: 5 }}>
            <Tab eventKey="details" title="Details">
              <DetailsTab candidateId={id}/>
            </Tab>

            <Tab eventKey="skills" title="Skills">
              <SkillsTab candidateId={id}/>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </Container>
  )
};

export default CandidateScreen;
