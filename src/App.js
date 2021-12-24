import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Skill />
    <Project /> 
    <Contact />
    </>
  );
}

export default App;
