
import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';


function App() {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '80px' }}>
        <section id="profile" className="section"><Profile/></section>
        <section id="about" className="section"><About/></section>
        <section id="projects" className="section"><Project/></section>
        <section id="skills" className="section"><Skills/></section>
        <section id="contact" className="section"><Contact/></section>
      </div>
    </div>
  );
}

export default App;
