import './Navbar.css';
import profileName from '../../assets/profileNameImage.png';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const aboutSection = document.getElementById("about");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <div className='navbar'>
      <img src={profileName} alt="Profile Name" style={{ width: '100px', height: 'auto' }} />

      <span onClick={openMenu} className="material-icons nav-mob-open">menu</span>
      <ul ref={menuRef} className="nav-menu">
        <span onClick={closeMenu} className="material-icons nav-mob-close">close</span>

        <li>
          <p 
            className={`anchor-link ${menu === "home" ? "active" : ""}`} 
            onClick={() => {
              setMenu("home");
              scrollToSection("home");
            }}
          >
            Home
          </p>
        </li>

        <li>
          <p 
            className={`anchor-link ${menu === "about" ? "active" : ""}`} 
            onClick={() => {
              setMenu("about");
              scrollToSection("about");
            }}
          >
            About Me
          </p>
        </li>

        <li>
          <p 
            className={`anchor-link ${menu === "experiences" ? "active" : ""}`} 
            onClick={() => {
              setMenu("experiences");
              scrollToSection("experiences");
            }}
          >
            Experiences
          </p>
        </li>

        <li>
          <p 
            className={`anchor-link ${menu === "work" ? "active" : ""}`} 
            onClick={() => {
              setMenu("work");
              scrollToSection("work");
            }}
          >
            Portfolio
          </p>
        </li>

        <li>
          <p 
            className={`anchor-link ${menu === "contact" ? "active" : ""}`} 
            onClick={() => {
              setMenu("contact");
              scrollToSection("contact");
            }}
          >
            Contact
          </p>
        </li>
      </ul>

      <div>
        <p className='nav-connect' onClick={() => scrollToSection("contact")}>
          Connect With Me
        </p>
      </div>
    </div>
  );
};

export default Navbar;
