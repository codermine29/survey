import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../navbar/navbar';
import CreateSurvey from '../surveyCreate/surveyCreate';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';




  function App2() {
    return (
      <div className="App">
        <Router>
        <Nav1></Nav1>
            <Switch>
              <Route path='/create' exact component={CreateSurvey}>
              </Route>
            </Switch>
        </Router>
      </div>
    );
  }
 
export default App2;
