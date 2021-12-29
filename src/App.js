import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { readList } from './api/functions';

import Header from './components/Header';
import Homepage from './components/Homepage';

import AllMixes from './pages/AllMixes';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mixesList, setMix] = useState();

  useEffect(() => {
    readList("Mixtape", setMix, setIsLoading);
  }, []);

  return (
    <Router>
      {!isLoading && 
        <div className="app">
          <Header/>
          <Routes>
            <Route exact path="/" element={<Homepage mixesList={mixesList} />} />
          </Routes>
          <Routes>
            <Route exact path="/toutes-les-emissions" element={<AllMixes mixesList={mixesList} />} />
          </Routes>
        
        </div>
      }
    </Router>
  );
}

export default App;
