import React, { useRef } from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import CustomNavbar from './components/Navbar/Navbar';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);

  const scrollToSection = (ref) => {
    const navbarHeight = document.querySelector('nav').offsetHeight;
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="App">
      <CustomNavbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
      />
      <div ref={homeRef} className="section">
        <Home />
      </div>
      <div ref={aboutRef} className="section">
        <About />
      </div>
      <div ref={portfolioRef} className="section">
        <Portfolio />
      </div>
      <div className="section">
        <Contact />
      </div>
    </div>
  );
}

export default App;
