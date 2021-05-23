import { Container } from "react-bootstrap"
import DataTable from 'react-data-table-component';
import { useHistory } from "react-router";


const CandidatesScreen = () => {
  const history = useHistory();

  const columns = [
    {name: 'First Name', selector: 'FirstName', sortable: true},
    {name: 'Surname', selector: 'Surname', sortable: true},
    {name: 'Town', selector: 'Town', sortable: true},
    {name: 'Country', selector: 'Country', sortable: true},
  ];

  const data = [
    {Id: 1, FirstName: 'Steven', Surname: 'Blake', Town: 'Arbroath', Country: 'Scotland'},
    {Id: 2, FirstName: 'Darren', Surname: 'Blake', Town: 'Montrose', Country: 'Scotland'}
  ];

  const rowClicked = (e) => {
    history.push(`/candidates/${e.Id}`)
  }

  return (
    <Container className="main-container">
      <h1>Candidates</h1>

      <DataTable
        columns={columns}
        data={data}
        highlightOnHover
        pointerOnHover
        onRowClicked={rowClicked}
      />
    </Container>
  )
}

export default CandidatesScreen;