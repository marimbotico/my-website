import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import { ReactTyped } from 'react-typed';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { homeImages } from './homeImages';

const Home = () => {
  return (
    <div className="home">
      <div className="content-wrapper">
        <div className="text-content">
          <Bounce cascade damping={0.1} duration={2000} triggerOnce>
            <h1>Hi! I am Isaac</h1>
          </Bounce>

          <h2>
            I'm a{" "}
            <ReactTyped
              strings={["Percussionist", "Teacher", "Software Developer"]}
              startDelay={100}
              typeSpeed={100}
              loop
              backSpeed={50}
              cursorChar=">"
              showCursor={true}
            />
          </h2>
        </div>

        <div className="carousel-container">
          <Carousel>
            {homeImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.image}
                  alt={image.title || `Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;