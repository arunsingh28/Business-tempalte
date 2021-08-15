import React from 'react';
import Navbar from './partials/Navbar';
import './style/navbar.scss'
import './style/main.scss'
import { Hero } from './components/Hero';
import { Topics } from './components/topics/Topics';
import { Section3 } from './components/section3';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Topics />
      <Section3 />
    </div>
  );
}

export default App;
