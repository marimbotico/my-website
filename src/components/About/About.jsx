import './About.css';
import { codeLogos } from './codeLogos';
import { Fade } from 'react-awesome-reveal';

const About = () => {
    return (
        <Fade direction="left" cascade damping={0.1}>
        <div className="code-group">
          {codeLogos.map((code, index) => (
            <div key = {index} className="code">
              <img src={code.image} alt={code.alt} />
              <p>{code.name}</p>
            </div>
          ))}
        </div>
        </Fade>
    );
};

export default About;