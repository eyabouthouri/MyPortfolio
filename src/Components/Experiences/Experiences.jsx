import React, { useState } from 'react';
import './Experiences.css';
import Experiences_Data from '../../assets/experiences_data';
import github_img from '../../assets/githubImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Experiences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex < Experiences_Data.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const experience = Experiences_Data[currentIndex];
  const descriptionList = experience.s_desc.split('.').filter(desc => desc.trim() !== "");

  return (
    <div id="experiences" className="experiences">
      <div className="experiences-title">
        <h1>My Experiences</h1>
      </div>

      <div className="experiences-navigation-container">
        <button onClick={prevCard} disabled={currentIndex === 0} className="nav-button">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="experiences-container">
          <div className="experiences-format">
            <h3>{experience.s_name}</h3>
            <div className="company-icon">
              <img src={experience.s_companyimage} alt="Company" />
            </div>
            <h2>{experience.s_company}</h2>
            <ul>
              {descriptionList.map((desc, i) => (
                <li key={i}><span className="no-bullet">{desc.trim()}</span></li>
              ))}
            </ul>
            <h2>{experience.s_date}</h2>
            <div className="github-icon">
              <a href={experience.s_github} target="_blank" rel="noopener noreferrer">
                <img src={github_img} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>

        <button onClick={nextCard} disabled={currentIndex === Experiences_Data.length - 1} className="nav-button">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Experiences;
