import './Navbar.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../../context/AppContext';

const SECTIONS = ['home', 'about', 'education', 'experiences', 'work', 'contact'];

const Navbar = () => {
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  const [menu, setMenu] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenu(id);
    closeMenu();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMenu(entry.target.id);
          }
        });
      },
      { rootMargin: '-42% 0px -48% 0px', threshold: 0 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <button type="button" className="nav-brand" onClick={() => scrollToSection('home')}>
        Eya
      </button>

      <ul className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
        <span onClick={closeMenu} className="material-icons nav-mob-close" role="button" aria-label="Close menu">close</span>

        <li>
          <p className={`anchor-link ${menu === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>
            {t.nav.home}
          </p>
        </li>
        <li>
          <p className={`anchor-link ${menu === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>
            {t.nav.about}
          </p>
        </li>
        <li>
          <p className={`anchor-link ${menu === 'education' ? 'active' : ''}`} onClick={() => scrollToSection('education')}>
            {t.nav.education}
          </p>
        </li>
        <li>
          <p className={`anchor-link ${menu === 'experiences' ? 'active' : ''}`} onClick={() => scrollToSection('experiences')}>
            {t.nav.experiences}
          </p>
        </li>
        <li>
          <p className={`anchor-link ${menu === 'work' ? 'active' : ''}`} onClick={() => scrollToSection('work')}>
            {t.nav.work}
          </p>
        </li>
        <li>
          <p className={`anchor-link ${menu === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>
            {t.nav.contact}
          </p>
        </li>
        <li className="nav-connect-mobile">
          <p className="nav-connect" onClick={() => scrollToSection('contact')}>
            {t.nav.connect}
          </p>
        </li>
      </ul>

      <div className="nav-actions">
        <div className="lang-switch" role="group" aria-label="Language">
          <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
            EN
          </button>
          <button type="button" className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>
            FR
          </button>
        </div>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </button>
        <p className="nav-connect nav-connect-desktop" onClick={() => scrollToSection('contact')}>
          {t.nav.connect}
        </p>
        <span onClick={() => setMobileOpen(true)} className="material-icons nav-mob-open" role="button" aria-label="Open menu">menu</span>
      </div>
    </nav>
  );
};

export default Navbar;
