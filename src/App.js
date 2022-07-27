import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './Home';
import Media from './Media'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<Media />} />
      </Routes>
    </Router>
  );
}

export default App;


