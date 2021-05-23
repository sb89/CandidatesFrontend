import './App.css';

import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from "react-router-dom";
import Main from './containers/layouts/Main';
import Home from './containers/views/Home';
import CandidatesScreen from './containers/views/Candidates';
import CandidateScreen from './containers/views/Candidate';
import CreateCandidateScreen from './containers/views/CreateCandidate';

function App() {
  return (
    <Router>
      <Switch>
        <Main>
          <Route path='/' exact component={Home}/>
          <Route path='/candidates' exact component={CandidatesScreen}/>
          <Route path='/candidates/:id' exact component={CandidateScreen}/>
          <Route path='/create-candidate' exact component={CreateCandidateScreen}/>
        </Main>
      </Switch>
    </Router>
  );
}

export default App;
