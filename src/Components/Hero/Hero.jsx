import './Hero.css';
import profile_img from '../../assets/im.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
   
  return (
    <div id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="hero-text">
          <h1>
            <span>I'm Eya Bouthouri, </span> Full Stack Developer, and currently a Full Stack freelancer
          </h1>
          <p>
            Enthusiastic about new technologies, curious, self-driven, and meticulous. I am driven by the desire to constantly improve and relish taking on new challenges.
          </p>
          <div className="hero-action">
            <div>
            <p className="hero-connect" onClick={() => scrollToSection("contact")}>
  Connect With Me
</p>

            </div>
            <div className="hero-resume">
              <a href="/ResumeEya.pdf" download="ResumeEya.pdf" className="hero-resume-link">
                My English Resume
              </a>
            </div>
            <div className="hero-resume">
              <a href="/CVEyaBouthouri.pdf" download="CVEyaBouthouri.pdf" className="hero-resume-link">
                My French Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
