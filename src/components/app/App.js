import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../navbar/navbar';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';
import CreateSurvey from '../surveyCreate/surveyCreate';
import Sidebar from '../sidebar/sidebar.js';
import Dashboard from '../dashboard/dashboard.js';
import Templates from '../templates/templates.js';
import Trash from '../trash/trash.js';
import Settings from '../settings/settings.js';

  function App2() {
    return (
      <div className="App">
        <Router>
        <Nav1/>
        <div style={{display:'flex', height:'100%', overflow:'scroll initial'}}>
          <Sidebar/>
          <Switch>
              <Route path='/create' exact component={CreateSurvey}></Route>
              <Route path='/dashboard' exact component={Dashboard}></Route>
              <Route path='/templates' exact component={Templates}></Route>
              <Route path='/mytemplates' exact component={Templates}></Route>
              <Route path='/trash' exact component={Trash}></Route>
              <Route path='/settings' exact component={Settings}></Route>
          </Switch>
        </div>
          
        </Router>
      </div>
    );
  }

 
export default App2;
