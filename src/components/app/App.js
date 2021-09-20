import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../navbar/navbar';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav1></Nav1>
      <Router>
      </Router>
    </div>
  );
}
 
export default App;
