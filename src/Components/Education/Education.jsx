import { useRef } from 'react';
import './Education.css';
import useInView from '../../hooks/useInView';
import { useApp } from '../../context/AppContext';

const Education = () => {
  const { t } = useApp();
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section id="education" className={`education reveal ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="education-title">
        <h1>{t.education.title}</h1>
      </div>

      <div className="education-timeline">
        {t.education.items.map((item) => (
          <article key={item.diploma} className="education-card">
            <p className="education-years">{item.years}</p>
            <h3>{item.diploma}</h3>
            <p className="education-school">{item.school}</p>
            <p className="education-details">{item.details}</p>
          </article>
        ))}
      </div>

      <div className="education-extra">
        <div>
          <h2>{t.education.languagesTitle}</h2>
          <div className="language-list">
            {t.education.languages.map((language) => (
              <div key={language.name} className="language-chip">
                <strong>{language.name}</strong>
                <span>{language.level}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>{t.education.extraTitle}</h2>
          <div className="extra-list">
            {t.education.extra.map((item) => (
              <article key={item.title} className="extra-card">
                <h3>{item.title}</h3>
                <p>{item.years}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
