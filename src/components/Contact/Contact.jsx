import React from 'react';
import './Contact.css';
import { Bounce } from 'react-awesome-reveal';
import Github from './assets/github.jpg';
import Linkedin from './assets/linkedin.jpg';
import Resume from './assets/resume.jpg';
import ResumePDF from './assets/ResumePDF.pdf';



const Portfolio = () => {
    const logos = [
        {
            name: 'LinkedIn',
            src: Linkedin,
            link: "https://www.linkedin.com/in/isaac-fern%C3%A1ndez-hern%C3%A1ndez-66685b53/",
        },
        {
            name: 'GitHub',
            src: Github,
            link: "https://github.com/marimbotico",
        },
        {
            name: "Resume",
            src: Resume,
            link: ResumePDF,
        }
    ];

    return (
        <div className='contact-container'>
            <Bounce cascade damping={0.1} duration={1500}>
                {logos.map((logo, index) => (
                    <a 
                        key={index} 
                        href={logo.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="logo-link"
                    >
                        <img 
                            src={logo.src} 
                            alt={logo.name}
                            className="logo-image"
                        />
                    </a>
                ))}
            </Bounce>
        </div>
    );
};

export default Portfolio;