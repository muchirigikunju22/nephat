import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolio';

export default function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav activeSection={activeSection} />
      <Hero hero={portfolioData.hero} />
      <About about={portfolioData.about} />
      <TechStack techStack={portfolioData.techStack} />
      <Skills skills={portfolioData.skills} />
      <Experience experience={portfolioData.experience} />
      <Projects projects={portfolioData.projects} />
      <Contact contact={portfolioData.contact} />
      <Footer footer={portfolioData.footer} />
    </>
  );
}
