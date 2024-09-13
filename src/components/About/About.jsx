import React from 'react';
import './About.css';
import { codeLogos } from './codeLogos';
import { Fade } from 'react-awesome-reveal';
import { ReactTyped } from 'react-typed';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-card'>
        <h2>My name is Isaac Fernandez.</h2>
        <h4>I'm a front-end developer based in Florida.</h4>
          <h4> Before transitioning to tech, I spent years as a professional percussionist,
            immersed in the world of rhythm and music. The discipline and creativity I honed as a
            musician now shape the way I approach coding, where precision and artistry are just as essential.</h4>
    
        {/* <h4>I used to spend most of my days playing drums as a professional percussionist.</h4> */}
        <div className='typed'>
          <h4><br />
            <ReactTyped
              strings={["{I've swapped drumsticks for a keyboard, and now I spend my days orchestrating lines of clean code—it's like drumming, but with fewer noise complaints!}"]}
              startWhenVisible
              typeSpeed={50}
            />
          </h4>
        </div>
        <br />
        <Fade cascade damping={0.1} duration={8000} triggerOnce>
          <h4> My work is driven by a passion for
            building seamless user experiences and delivering thoughtful design through modern web
            technologies. My preferred programming languages and frameworks are:</h4>
          {/* <h4>I specialize in crafting visually appealing and user-friendly applications. My preferred programming languages and frameworks are:</h4> */}
        </Fade>
      </div>

      <Fade direction="left" cascade damping={0.3} duration={2000}>
        <div className="code-group">
          {codeLogos.map((code, index) => (
            <div key={index} className="code">
              <img src={code.src} alt={code.alt} />
              <p>{code.name}</p>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default About;