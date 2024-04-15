import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FastPage from './pages/FastPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import PageFour from './pages/PageFour';
import PageFive from './pages/PageFive';
import PageSix from './pages/PageSix';
import PageSeven from './pages/PageSeven';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/fourth" element={< PageFour/>} />
        <Route path="/" element={<FastPage />} />
        <Route path="/five" element={< PageFive/>} />
        <Route path="/six" element={<PageSix/>}/>
        <Route path="/seven" element={<PageSeven/>}/>
      </Routes>
    </Router>
  );
}

export default App;
