import { useState } from 'react';
import ProjectModal from './ProjectModal';

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const getStatusClass = (status) => {
    switch (status) {
      case 'active':
        return 'status-active';
      case 'done':
        return 'status-done';
      case 'ongoing':
        return 'status-ongoing';
      default:
        return '';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return '● In Progress';
      case 'done':
        return '✓ Completed';
      case 'ongoing':
        return '◈ Ongoing';
      default:
        return '';
    }
  };

  return (
    <>
      <section id="projects">
        <div className="section-label">05 // Work</div>
        <h2 className="section-title">Key Projects</h2>
        <p
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '0.72rem',
            color: 'var(--muted)',
            letterSpacing: '2px',
            marginTop: '-32px',
            marginBottom: '36px'
          }}
        >
          // CLICK A CARD TO VIEW FULL DETAILS
        </p>
        <div className="projects-grid fade-in visible">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="click-hint">VIEW ↗</div>
              <span className={`project-status ${getStatusClass(project.status)}`}>
                {getStatusBadge(project.status)}
              </span>
              <div className="project-title">{project.title}</div>
              <p className="project-desc">{project.description}</p>
              {project.storyShort && (
                <p className="project-story-short" style={{ fontSize: '0.9rem', color: 'var(--muted)', marginTop: '8px' }}>
                  {project.storyShort}
                </p>
              )}
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
