import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { GetCandidateRequestAsync } from "../../../../api/CandidateAPI";

const DetailsTab = () => {
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      var data = await GetCandidateRequestAsync(3);
      
      setCandidate(data);
      setLoading(false);
    };

    fetch();
  }, []);

  if(loading) {
    return (
      <Container className="main-container">
        <div className="d-flex justify-content-center ">
          <Spinner animation="border" variant="primary" />
        </div>
      </Container>
      
    );
  }

  if(candidate == null) {
    return <></>;
  }

  return (
    <div className="mt-5">
      <Row>
        <Col md={6}>
          <dt>First Name</dt>
          <dd>{candidate.firstName}</dd>
        </Col>

        <Col md={6}>
          <dt>Surname</dt>
          <dd>{candidate.firstName}</dd>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <dt>Date Of Birth</dt>
          <dd>{new Date(candidate.dateOfBirth * 1000).toLocaleDateString()}</dd>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <dt>Address</dt>
          <dd>{candidate.address1}</dd>
        </Col>

        <Col md={6}>
          <dt>Town</dt>
          <dd>{candidate.town}</dd>        
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <dt>PostCode</dt>
          <dd>{candidate.postCode}</dd>    
        </Col>

        <Col md={6}>
          <dt>Country</dt>
          <dd>{candidate.country}</dd>            
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <dt>Home Phone</dt>
          <dd>{candidate.phoneHome}</dd>            
        </Col>

        <Col md={6}>
          <dt>Mobile Phone</dt>
          <dd>{candidate.phoneMobile}</dd>    
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <dt>Work Phone</dt>
          <dd>{candidate.phoneWork}</dd>         
        </Col>
      </Row>


    </div>
  )
};

export default DetailsTab;