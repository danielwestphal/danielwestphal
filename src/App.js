import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/*<Route path='/about' element={<About />} />*/}
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;


