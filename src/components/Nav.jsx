import { useEffect } from 'react';

export default function Nav({ activeSection }) {
  useEffect(() => {
    const handleScroll = () => {
      // Scroll detection for future enhancements
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="nav-logo">
        {"<"} <span>NG</span> {"/>"}
      </div>
      <ul className="nav-links">
        <li>
          <a
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => scrollToSection('about')}
          >
            About
          </a>
        </li>
        <li>
          <a
            className={activeSection === 'stack' ? 'active' : ''}
            onClick={() => scrollToSection('stack')}
          >
            Stack
          </a>
        </li>
        <li>
          <a
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
