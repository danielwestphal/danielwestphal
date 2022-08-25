import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import Programming from './pages/Programming';
import { portfolio } from './data/portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />

        {portfolio.map(e => <Route path={e.link} element={<Programming project={e} />} />)}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;


