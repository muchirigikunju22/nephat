export default function About({ about }) {
  return (
    <section id="about">
      <div className="section-label">01 // Profile</div>
      <h2 className="section-title">About Me</h2>
      <div className="about-grid fade-in visible">
        <div className="about-text">
          {about.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
          <div style={{ marginTop: '24px' }}>
            <a href="mailto:kunjuinfotech2@gmail.com" className="btn">
              Contact Me
            </a>
          </div>
        </div>
        <div className="about-stats">
          {about.stats.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card"
              style={{
                gridColumn: stat.span ? `span ${stat.span}` : 'auto'
              }}
            >
              <div className="stat-num">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
