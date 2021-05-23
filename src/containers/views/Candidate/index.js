import React from "react";
import { Card, Container, Tab, Tabs, Button } from "react-bootstrap";
import SkillsTab from "./tabs/Skills";
import DetailsTab from "./tabs/Details";
import { useHistory, useParams } from "react-router";


const CandidateScreen = () => {
  const { id } = useParams();
  const history = useHistory();

  return (
    <Container className="main-container">

      <Button onClick={() => history.push('/candidates')}>Back to candidates</Button>

      <Card className="mt-1">
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
