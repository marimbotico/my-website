import React from 'react';
import './Portfolio.css';
import { Zoom } from 'react-awesome-reveal';
import Blog from '../Portfolio/assets/explore-the-world.jpg'
import Movies from '../Portfolio/assets/movie-genres.jpg'
import { ReactTyped } from 'react-typed';
import Mail from './assets/white-mail.jpeg'

const Portfolio = () => {
    const projects = [
        {
            name: 'My Travel Blog',
            src: Blog,
            link: "https://main.d7b9yb64r1wgh.amplifyapp.com/",
        },
        {
            name: 'JQuery Movies',
            src: Movies,
            link: "https://jquery-movies-app.netlify.app/",
        },
    ];

    return (
        <div className='projects-heading'>
            <h2>Check out my latest projects:</h2>
            <div className='portfolio-container'>
                <Zoom cascade damping={0.1}>
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            <img
                                src={project.src}
                                alt={project.name}
                                className="project-image"
                            />
                            <div className="project-name">{project.name}</div>
                        </a>
                    ))}
                </Zoom>
            </div>
            <div className='contact-me'>
                <img src={Mail} alt="Email" />
                <h2>Isaac Fernandez | isaacfer21@gmail.com</h2>
            </div>
        </div>
    );
};

export default Portfolio;