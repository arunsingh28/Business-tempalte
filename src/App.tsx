import React from 'react';
import Navbar from './partials/Navbar';
import './style/main.scss'
import './style/brekpoint.scss'
import { Hero } from './components/Hero';
import { Topics } from './components/Topics';
import { Section3 } from './components/Section3';
import { Quality } from './components/Quality';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <Topics />
        <Section3 />
        {/*<Quality />
        <Testimonial /> */}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
