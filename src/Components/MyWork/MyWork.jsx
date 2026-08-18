import { useRef } from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import useInView from '../../hooks/useInView';
import { useApp } from '../../context/AppContext';

const MyWork = () => {
  const { t, lang } = useApp();
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <div id="work" className={`mywork reveal ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="mywork-title">
        <h1>{t.work.title}</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <article
            key={work.w_title.en}
            className="work-card"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="work-image-container">
              <img src={work.w_img} alt={work.w_title[lang]} className="work-image" />
              <div className="work-overlay">
                {work.w_link ? (
                  <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="work-link">
                    {t.work.view}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                ) : (
                  <span className="work-link">{t.work.featured}</span>
                )}
              </div>
            </div>
            <div className="work-details">
              <h3 className="work-title">{work.w_title[lang]}</h3>
              <p className="work-description">{work.w_desc[lang]}</p>
              <div className="work-tags">
                {work.w_tags.map((tag) => (
                  <span key={tag} className="work-tag">{`#${tag}`}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
