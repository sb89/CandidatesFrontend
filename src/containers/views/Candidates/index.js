import { useEffect, useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap"
import DataTable from 'react-data-table-component';
import { useHistory } from "react-router";
import { GetCandidatesAsync } from "../../../services/CandidateService";


const CandidatesScreen = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      var candidates = await GetCandidatesAsync();

      setData(candidates);
      setLoading(false);
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
    <Container className="main-container">
      <Button variant="success" className="mt-5" onClick={() => history.push('/create-candidate')}>
        Create Candidate
      </Button>

      <DataTable
        columns={columns}
        data={data}
        highlightOnHover
        pointerOnHover
        pagination
        onRowClicked={rowClicked}
      />
    </Container>
  )
}

export default CandidatesScreen;