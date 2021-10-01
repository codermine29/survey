import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../navbar/navbar';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';
import CreateSurvey from '../surveyCreate/surveyCreate';
import Sidebar from '../sidebar/sidebar.js';
import Survey from '../survey/survey';
import Dashboard from '../dashboard/dashboard.js';
import Templates from '../templates/templates.js';
import Trash from '../trash/trash.js';
import Settings from '../settings/settings.js';

  function match(){
    let re = new RegExp("/survey/");
    let match = re.test(window.location.pathname)

    return match;
  }
  function sideBar(){
    if(!match())
      return <Sidebar></Sidebar>
  }
  function navbar(){
    if(!match())
      return <Nav1></Nav1>
  }
  function App2() {
    return (
      <div className="App">
        <Router>
        {navbar()}
        <div style={{display:'flex', height:'100%', overflow:'scroll initial'}}>
          {sideBar()}
          <Switch>
              <Route path='/survey/:id/:id2' exact component={Survey}></Route>
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
