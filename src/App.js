import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
