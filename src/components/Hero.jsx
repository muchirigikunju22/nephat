import { useEffect, useState } from 'react';

export default function Hero({ hero }) {
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = hero.roles[roleIndex];
    const delay = isDeleting ? 50 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < role.length) {
        setDisplayedRole(role.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedRole(role.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === role.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % hero.roles.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, hero.roles]);

  return (
    <section id="hero">
      <div className="hero-bg-orb orb1"></div>
      <div className="hero-bg-orb orb2"></div>
      <div className="hero-content">
        <div className="hero-tag">
          <span>{hero.tag}</span>
        </div>
        <h1 className="hero-name">
          {hero.name} <span className="highlight">{hero.nameHighlight}</span>
        </h1>
        <div className="hero-role">{displayedRole}</div>
        <p className="hero-desc">{hero.description}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn">
            View My Work
          </a>
          <a href="#contact" className="btn">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
