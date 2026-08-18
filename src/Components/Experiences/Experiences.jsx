import { useRef, useState } from 'react';
import './Experiences.css';
import Experiences_Data from '../../assets/experiences_data';
import github_img from '../../assets/githubImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import useInView from '../../hooks/useInView';
import { useApp } from '../../context/AppContext';

const Experiences = () => {
  const { t, lang } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex < Experiences_Data.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const experience = Experiences_Data[currentIndex];
  const bullets = experience.s_bullets[lang];

  return (
    <div id="experiences" className={`experiences reveal ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="experiences-title">
        <h1>{t.experiences.title}</h1>
      </div>

      <div className="experiences-navigation-container">
        <button onClick={prevCard} disabled={currentIndex === 0} className="nav-button" aria-label="Previous experience">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="experiences-container">
          <div key={`${currentIndex}-${lang}`} className="experiences-format fade-slide">
            <div className="company-icon">
              <img src={experience.s_companyimage} alt={experience.s_company} />
            </div>
            <h3>{experience.s_name[lang]}</h3>
            <h2>
              {experience.s_company}
              {experience.s_type ? ` · ${experience.s_type[lang]}` : ''}
            </h2>
            <p className="experience-meta">
              {experience.s_date[lang]}
              {experience.s_location ? ` · ${experience.s_location[lang]}` : ''}
            </p>
            <ul className="experience-bullets">
              {bullets.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
            {experience.s_skills && (
              <div className="experience-skills">
                {experience.s_skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            )}
            {experience.s_github && (
              <div className="github-icon">
                <a href={experience.s_github} target="_blank" rel="noopener noreferrer">
                  <img src={github_img} alt="GitHub" />
                </a>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={nextCard}
          disabled={currentIndex === Experiences_Data.length - 1}
          className="nav-button"
          aria-label="Next experience"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="experience-dots">
        {Experiences_Data.map((item, index) => (
          <button
            key={item.s_company}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to ${item.s_company}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
