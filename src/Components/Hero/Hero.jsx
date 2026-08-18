import { useEffect, useState } from 'react';
import './Hero.css';
import profile_img from '../../assets/eya.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../../context/AppContext';

const downloadCv = async (fileName) => {
  const url = `${import.meta.env.BASE_URL}${fileName}`;
  const response = await fetch(url);
  if (!response.ok) {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }
  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
};

const Hero = () => {
  const { t, lang } = useApp();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  const roles = t.hero.roles;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setText('');
    setDeleting(false);
    setRoleIndex(0);
  }, [lang]);

  useEffect(() => {
    const current = roles[roleIndex];
    let delay = deleting ? 38 : 78;
    if (!deleting && text === current) delay = 1500;
    if (deleting && text === '') delay = 280;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text === current) {
          setDeleting(true);
        } else {
          setText(current.slice(0, text.length + 1));
        }
      } else if (text === '') {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      } else {
        setText(current.slice(0, text.length - 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return (
    <div id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-orb hero-orb-three" />
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => (
          <span key={index} style={{ '--i': index }} />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-image">
          <img src={profile_img} alt="Eya Bouthouri" />
        </div>
        <div className="hero-text">
          <p className="hero-badge">{t.hero.badge}</p>
          <h1>
            <span>{t.hero.name}</span>
          </h1>
          <p className="hero-role">
            {text}
            <span className="typed-cursor" aria-hidden="true" />
          </p>
          <p className="hero-bio">{t.hero.bio}</p>
          <div className="hero-action">
            <button type="button" className="hero-connect" onClick={() => scrollToSection('contact')}>
              {t.hero.connect}
            </button>
            <button type="button" className="hero-resume" onClick={() => downloadCv('ResumeEya.pdf')}>
              <FontAwesomeIcon icon={faDownload} />
              {t.hero.resumeEn}
            </button>
            <button type="button" className="hero-resume" onClick={() => downloadCv('CVEyaBouthouri.pdf')}>
              <FontAwesomeIcon icon={faDownload} />
              {t.hero.resumeFr}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
