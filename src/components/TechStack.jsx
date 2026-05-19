import { useState } from 'react';

export default function TechStack({ techStack }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="stack">
      <div className="section-label">02 // Stack</div>
      <h2 className="section-title">Tech Stack</h2>
      <div className="fade-in visible">
        <div className="stack-tabs">
          {techStack.map((stack, idx) => (
            <button
              key={idx}
              className={`stack-tab ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {stack.category}
            </button>
          ))}
        </div>
        <div className="stack-items">
          {techStack[activeTab].items.map((item, idx) => (
            <div key={idx} className="stack-item">
              <span className="stack-name">{item.name}</span>
              <div className="stack-bar">
                <div
                  className="stack-progress"
                  style={{ width: `${item.pct}%` }}
                ></div>
              </div>
              <span className="stack-pct">{item.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
