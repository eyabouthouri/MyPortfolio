import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faCogs, faServer, faCoffee, faDatabase } from '@fortawesome/free-solid-svg-icons'; 
import { faReact, faAngular, faNodeJs, faSass, faJsSquare } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const techSkills = [
    { name: "React", icon: faReact },
    { name: "Angular", icon: faAngular },
    { name: "Node.js", icon: faNodeJs },
    { name: "MongoDB", icon: faDatabase },
    { name: "JavaScript", icon: faJsSquare },
    { name: "Sass", icon: faSass },
    { name: "TypeScript", icon: faJsSquare },
    { name: "GitHub", icon: faCodeBranch },
    { name: "Jenkins", icon: faCogs },
    { name: "DevOps", icon: faCogs },
    { name: "Spring Boot", icon: faServer },
    { name: "Java", icon: faCoffee },
    { name: "PostgreSQL", icon: faDatabase },
    { name: "SQL", icon: faDatabase }
  ];

  return (
<div id="about" className="about">
<div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-container">
        <div className="about-text">
          <p>
            Passionate about web development, I work as a full-stack freelancer with a strong background in software development.
            My journey started with school projects and internships, where I honed my skills in designing intuitive user interfaces. 
            I enjoy solving complex problems and love seeing my applications function seamlessly across devices. 
            I am committed to providing innovative solutions in this fast-paced tech world.
          </p>
        </div>
      </div>

      <div className="skills-section">
        <h2>Tech Stack</h2>
        <div className="tech-skills">
          {techSkills.map((skill) => (
            <div key={skill.name} className="tech-card">
              <FontAwesomeIcon icon={skill.icon} className="tech-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
