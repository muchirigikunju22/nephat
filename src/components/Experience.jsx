export default function Experience({ experience }) {
  return (
    <section id="experience">
      <div className="section-label">04 // Career</div>
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline fade-in visible">
        {experience.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-period">{exp.period}</div>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-company">{exp.company}</p>
              <ul className="timeline-points">
                {exp.points.map((point, pointIdx) => (
                  <li key={pointIdx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
