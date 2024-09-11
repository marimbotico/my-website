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
        <h4>I used to spend most of my days playing drums as a professional percussionist.</h4>
        <div className='typed'>
          <h4><br />
            <ReactTyped
              strings={["{Now I spend most of my days writing clean code.}"]}
              startWhenVisible
              typeSpeed={50}
            />
          </h4>
        </div>
        <br />
        <Fade cascade damping={0.1} duration={8000} triggerOnce>
          <h4>I specialize in crafting visually appealing and user-friendly applications. My preferred programming languages and frameworks are:</h4>
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