import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import DataTable from 'react-data-table-component';
import { useHistory } from "react-router";
import { GetCandidatesAsync } from "../../../services/CandidateService";


const CandidatesScreen = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      var candidates = await GetCandidatesAsync();

      setData(candidates);
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

  return (
    <Container className="main-container">
      <h1>Candidates</h1>

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