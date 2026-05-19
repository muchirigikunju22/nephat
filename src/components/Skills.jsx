export default function Skills({ skills }) {
  return (
    <section id="skills">
      <div className="section-label">03 // Skills</div>
      <h2 className="section-title">Core Competencies</h2>
      <div className="skills-grid fade-in visible">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <div className="skill-tags">
              {skill.tags.map((tag, tagIdx) => (
                <span key={tagIdx} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
