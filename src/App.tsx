import React from 'react';
import Navbar from './partials/Navbar';
import './style/navbar.scss'
import './style/main.scss'
import { Hero } from './components/Hero';
import { Topics } from './components/topics/Topics';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Topics />
    </div>
  );
}

export default App;
