import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../../context/AppContext';

const Footer = () => {
  const { t } = useApp();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">Eya Bouthouri</p>
        <div className="footer-socials">
          <a href="https://github.com/eyabouthouri" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:eyabouthouri@outlook.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Eya Bouthouri. {t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
