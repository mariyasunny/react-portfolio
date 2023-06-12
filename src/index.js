import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './hero_components/Hero'
import Navigate from './components/Navigate'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Foot from './components/Foot'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
    <Navigate />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Foot />
  </React.StrictMode>
);
