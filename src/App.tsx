import React from 'react';
import Navbar from './partials/Navbar';
import './style/main.scss'
import './style/brekpoint.scss'
import { Hero } from './components/Hero';
import { Topics } from './components/Topics';
import { Section } from './components/Section';
import { Quality } from './components/Quality';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <div className="appWrapper">
        <div className="App">
          <Navbar />
          <Hero />
          <Topics />
          <Section />
          <Quality />
          <Testimonial />
        </div>
        <Footer />
        {/* message for small screen */}
      </div>
      <div className="message">
        <h3>Your device size is not suitable for this website please open it on large screen device (desktop/laptop)<span>BTW hi</span></h3>
        <div className="footer">
          <span>Design & code by </span>
          <a href="https://www.google.com/search?q=arunsingh28&rlz=1C1RXQR_enIN965IN965&sxsrf=ALeKk00wQ_D7lgL0O6whYTOwv-VCeTS1Pw%3A1629314302968&ei=_lwdYZbUOtqsrQGFhKqwAQ&oq=arun&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIECCMQJzIECCMQJzIKCC4QsQMQgwEQQzILCC4QgAQQsQMQgwEyBAgAEEMyBAgAEEMyCwgAEIAEELEDEIMBMggILhCABBCxAzILCC4QgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOgUIABCRAjoFCC4QgARKBAhBGABQgM8mWI3TJmD62iZoAHACeACAAZ4CiAGkB5IBBTAuNC4xmAEAoAEBwAEB&sclient=gws-wiz"><span>Arun Singh </span>🦄</a>
        </div>
      </div>
    </>
  );
}

export default App;
