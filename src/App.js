import './App.css';

import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from "react-router-dom";
import Main from './containers/layouts/Main';
import Home from './containers/views/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Main>
          <Route path='/' exact component={Home}/>
        </Main>
      </Switch>
    </Router>
  );
}

export default App;
