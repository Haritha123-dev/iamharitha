import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Education from './Pages/Education';
import Achivements from './Pages/Achivements';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/education" element={<Education />} />
      <Route path="/achievements" element={<Achivements />}/>
    </Routes>
  );
}

export default App;
