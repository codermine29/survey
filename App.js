import './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './navbar/navbar';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Router>
      </Router>
    </div>
  );
}
 
export default App;
