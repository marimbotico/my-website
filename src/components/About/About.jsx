import './About.css';
import { codeLogos } from './codeLogos';
import { Fade, Bounce } from 'react-awesome-reveal';


const About = () => {
    return (
      <>
      <div className='about-card'>
      <Bounce cascade damping={0.1} duration={1000} triggerOnce>
        <h2>I specialize in crafting visually appealing and user-friendly applications. My preferred programming languages and frameworks are: </h2> 
      </Bounce>
      </div>
        <Fade direction="left" cascade damping={0.3} duration={2000}>
        <div className="code-group">
          {codeLogos.map((code, index) => (
            <div key = {index} className="code">
              <img src={code.image} alt={code.alt} />
              <p>{code.name}</p>
            </div>
          ))}
        </div>
        </Fade>
        </>
    );
};

export default About;