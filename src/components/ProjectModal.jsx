import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top-bar"></div>
        <div className="modal-header">
          <div className="modal-header-row">
            <div>
              <div className="modal-badge">
                <span
                  className={`project-status ${
                    project.status === 'active'
                      ? 'status-active'
                      : project.status === 'done'
                      ? 'status-done'
                      : 'status-ongoing'
                  }`}
                >
                  {project.status === 'active'
                    ? '● In Progress'
                    : project.status === 'done'
                    ? '✓ Completed'
                    : '◈ Ongoing'}
                </span>
              </div>
              <h2 className="modal-title">{project.title}</h2>
              <div className="modal-meta">
                <div className="modal-meta-item">
                  <b>{project.category}</b>
                </div>
                {project.type && (
                  <div className="modal-meta-item">
                    <b>{project.type}</b>
                  </div>
                )}
                {(project.started || project.completed || project.period) && (
                  <div className="modal-meta-item">
                    <b>
                      {project.started ||
                        project.completed ||
                        project.period}
                    </b>
                  </div>
                )}
              </div>
            </div>
            <button className="modal-close" onClick={onClose}>
              ✕
            </button>
          </div>
        </div>

        <div className="modal-body">
          {project.story && (
            <div className="modal-sec">
              <div className="modal-sec-title">Case Study</div>
              <div className="modal-text">
                {project.story.split('\n\n').map((para, idx) => (
                  <p key={idx} style={{ marginBottom: '10px' }}>{para}</p>
                ))}
              </div>
            </div>
          )}
          {project.overview && (
            <div className="modal-sec">
              <div className="modal-sec-title">Overview</div>
              <p className="modal-text">{project.overview}</p>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div className="modal-sec">
              <div className="modal-sec-title">Features</div>
              <ul className="modal-list">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.competitions && project.competitions.length > 0 && (
            <div className="modal-sec">
              <div className="modal-sec-title">Competitions</div>
              <ul className="modal-list">
                {project.competitions.map((comp, idx) => (
                  <li key={idx}>
                    <strong>{comp.name}:</strong> {comp.desc}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.techTags && project.techTags.length > 0 && (
            <div className="modal-sec">
              <div className="modal-sec-title">Tech Stack</div>
              <div className="modal-stack">
                {project.techTags.map((tag, idx) => (
                  <span key={idx} className="modal-stack-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.skillTags && project.skillTags.length > 0 && (
            <div className="modal-sec">
              <div className="modal-sec-title">Skills Demonstrated</div>
              <div className="modal-stack">
                {project.skillTags.map((tag, idx) => (
                  <span key={idx} className="modal-stack-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.links && project.links.length > 0 && (
            <div className="modal-sec">
              <div className="modal-sec-title">Links</div>
              <div className="modal-links">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          )}

          {project.coming && (
            <div className="modal-sec" style={{ textAlign: 'center' }}>
              <p
                className="modal-coming"
                style={{ fontSize: '0.75rem', marginTop: '8px' }}
              >
                {project.coming}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
