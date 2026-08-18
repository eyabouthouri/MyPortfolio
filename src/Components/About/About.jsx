import { useRef } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faCogs, faServer, faCoffee, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faReact, faAngular, faNodeJs, faSass, faJsSquare, faPython, faMicrosoft, faDocker, faGitlab, faJava, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import useInView from '../../hooks/useInView';
import { useApp } from '../../context/AppContext';

const About = () => {
  const { t } = useApp();
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  const techSkills = [
    { name: 'Java', icon: faJava },
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'TypeScript', icon: faJsSquare },
    { name: 'C#', icon: faMicrosoft },
    { name: 'Angular', icon: faAngular },
    { name: 'React', icon: faReact },
    { name: 'Spring Boot', icon: faServer },
    { name: 'Node.js', icon: faNodeJs },
    { name: '.NET', icon: faMicrosoft },
    { name: 'Symfony', icon: faServer },
    { name: 'MySQL', icon: faDatabase },
    { name: 'PostgreSQL', icon: faDatabase },
    { name: 'MongoDB', icon: faDatabase },
    { name: 'Docker', icon: faDocker },
    { name: 'Jenkins', icon: faCogs },
    { name: 'GitLab', icon: faGitlab },
    { name: 'GitHub', icon: faGitAlt },
    { name: 'Python', icon: faPython },
    { name: 'Sass', icon: faSass },
    { name: 'CI/CD', icon: faCodeBranch },
  ];

  const marqueeSkills = [...techSkills, ...techSkills];

  return (
    <div id="about" className={`about reveal ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="about-title">
        <h1>{t.about.title}</h1>
      </div>

      <div className="about-highlights">
        {t.about.highlights.map((item) => (
          <article key={item.title} className="highlight-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="about-container">
        <div className="about-text">
          <p>{t.about.text}</p>
        </div>
      </div>

      <div className="soft-section">
        <h2>{t.about.softTitle}</h2>
        <div className="soft-list">
          {t.about.soft.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h2>{t.about.stack}</h2>
        <div className="skills-marquee">
          <div className="tech-track">
            {marqueeSkills.map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="tech-card">
                <FontAwesomeIcon icon={skill.icon} className="tech-icon" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
