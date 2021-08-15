import React from 'react';
import Navbar from './partials/Navbar';
import './style/navbar.scss'
import './style/main.scss'
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
