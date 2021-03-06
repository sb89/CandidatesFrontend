import { useEffect, useState } from "react";
import { Button, Card, Container, Spinner } from "react-bootstrap"
import DataTable from 'react-data-table-component';
import { useHistory } from "react-router";
import { GetCandidatesAsync } from "../../../services/CandidateService";
import FlashMessageService from "../../../util/FlashMessageService";


const CandidatesScreen = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const candidates = await GetCandidatesAsync();

        setData(candidates);
      } catch {
        FlashMessageService.setError("An unexpected error has occurred. Please try again later.");
      } finally {
        setLoading(false);
      }

    };

    fetch();
  }, []);

  const columns = [
    {name: 'First Name', selector: 'firstName', sortable: true},
    {name: 'Surname', selector: 'surname', sortable: true},
    {name: 'Town', selector: 'town', sortable: true},
    {name: 'Country', selector: 'country', sortable: true},
  ];

  const rowClicked = (e) => {
    history.push(`/candidates/${e.id}`)
  }

  if(loading) {
    return (
      <Container className="main-container">
        <div className="d-flex justify-content-center ">
          <Spinner animation="border" variant="primary" />
        </div>
      </Container>
      
    );
  }

  return (
    <Container>
      <Button variant="success" onClick={() => history.push('/create-candidate')}>
        Create Candidate
      </Button>

      <Card className="mt-1">
        <Card.Body>
          <DataTable
            columns={columns}
            data={data}
            highlightOnHover
            pointerOnHover
            pagination
            onRowClicked={rowClicked}
          />
        </Card.Body>
      </Card>

    </Container>
  )
}

export default CandidatesScreen;