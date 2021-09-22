import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../navbar/navbar';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';
import CreateSurvey from '../surveyCreate/surveyCreate';
import Sidebar from '../sidebar/sidebar.js'

  function App2() {
    return (
      <div className="App">
        <Router>
        <Nav1/>
        <div style={{display:'flex', height:'100%', overflow:'scroll initial'}}>
          <Sidebar/>
          <Switch>
              <Route path='/create' exact component={CreateSurvey}></Route>
          </Switch>
        </div>
          
        </Router>
      </div>
    );
  }

 
export default App2;
