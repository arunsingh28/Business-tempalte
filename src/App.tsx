import React from 'react';
import Navbar from './partials/Navbar';
import './style/main.scss'
import { Hero } from './components/Hero';
import { Topics } from './components/Topics';
import { Section3 } from './components/Section3';
import { Quality } from './components/Quality';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Topics />
      <Section3 />
      <Quality />
    </div>
  );
}

export default App;
